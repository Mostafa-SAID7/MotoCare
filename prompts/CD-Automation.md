Create a complete, production-grade GitHub repository automation system for the MOTOcare Next.js auto-service website. The system must be fully automatic, zero-manual-intervention where possible, and cover Docker, semantic versioning, tagging, auto-releases, auto-merge of non-conflicting PRs, security, quality gates, and deployment readiness.

### 1. Repository Structure (create these files exactly)
.github/
├── workflows/
│   ├── ci.yml                    # Main CI (lint, typecheck, test, build)
│   ├── docker.yml                # Build & push multi-arch Docker images
│   ├── release.yml               # Semantic version + GitHub Release + Docker tags
│   ├── auto-merge.yml            # Auto-merge PRs when checks pass + no conflicts
│   ├── dependabot-auto-merge.yml # Auto-merge Dependabot PRs (minor/patch)
│   ├── codeql.yml                # Security scanning
│   ├── lighthouse.yml            # Performance & accessibility audit
│   └── stale.yml                 # Close inactive issues/PRs
├── dependabot.yml
├── CODEOWNERS
├── pull_request_template.md
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md
├── RELEASE.md                    # Release process documentation
└── SECURITY.md
Dockerfile                        # Multi-stage production Dockerfile
Dockerfile.dev                    # Development Dockerfile
docker-compose.yml                # Local development + production-like
docker-compose.prod.yml
.dockerignore
.github/workflows/README.md       # Clear explanation of every workflow
text### 2. Docker Setup (mandatory)

**Dockerfile** (multi-stage, optimized for Next.js App Router + standalone output):
- Stage 1: deps (node:22-alpine, install with --frozen-lockfile)
- Stage 2: builder (copy source, run `next build`, enable `output: 'standalone'`)
- Stage 3: runner (node:22-alpine, non-root user, copy standalone + public + .next/static)
- Expose 3000
- HEALTHCHECK
- Labels for OCI (org.opencontainers.image.*)
- Support build args: NODE_ENV, NEXT_PUBLIC_*, VERSION, COMMIT_SHA

**docker-compose.yml** (local):
- app service (build from Dockerfile.dev or use volume mounts for hot-reload)
- Optional: redis (if later needed), traefik or nginx reverse proxy
- Networks, volumes, restart policies

**docker-compose.prod.yml**:
- Production image from GHCR
- Environment from .env
- Resource limits, healthcheck, logging

**.dockerignore**:
node_modules, .next, .git, coverage, *.md, .env*, etc.

### 3. Versioning & Tagging Strategy (fully automatic)

Use **Semantic Versioning (SemVer)** driven by Conventional Commits.

- Tool: `semantic-release` + `@semantic-release/github` + `@semantic-release/git` + `@semantic-release/changelog` + `@semantic-release/npm` (even if private)
- Config file: `.releaserc.json` or `release.config.js`
- Branches:
  - `main` → production releases (1.2.3)
  - `next` or `beta` → pre-releases
- On every push to `main` that passes CI:
  - Analyze commits since last release
  - Bump version (major/minor/patch)
  - Generate CHANGELOG.md
  - Create Git tag `vX.Y.Z`
  - Create GitHub Release with notes + assets
  - Trigger Docker build with tags:
    - `ghcr.io/<owner>/motocare:latest`
    - `ghcr.io/<owner>/motocare:vX.Y.Z`
    - `ghcr.io/<owner>/motocare:X.Y`
    - `ghcr.io/<owner>/motocare:sha-<short-sha>`

Also support manual version bump via workflow_dispatch.

### 4. GitHub Actions Workflows (detailed requirements)

#### A. `ci.yml` (runs on every PR + push to main/develop)
- Triggers: pull_request, push (main, develop)
- Jobs:
  - lint (eslint + prettier check)
  - typecheck (tsc --noEmit)
  - test (if any tests exist, otherwise skip gracefully)
  - build (next build)
  - cache node_modules + .next/cache
- Matrix optional for Node 20/22
- Fail fast on any error
- Upload build artifacts

#### B. `docker.yml`
- Triggers: push tags `v*`, workflow_call from release, workflow_dispatch
- Build multi-arch (linux/amd64, linux/arm64) using docker/build-push-action + QEMU + Buildx
- Login to GHCR (GITHUB_TOKEN)
- Push with the tags listed above
- Generate SBOM + provenance (attestations)
- Cache layers

#### C. `release.yml` (the heart of automation)
- Triggers: push to main (only if commits contain conventional messages)
- Permissions: contents: write, issues: write, pull-requests: write, id-token: write
- Steps:
  1. Checkout with fetch-depth 0
  2. Setup Node
  3. Install semantic-release and plugins
  4. Run semantic-release
  5. On success → call docker.yml with the new version
- Also create/update a `VERSION` file or package.json version

#### D. `auto-merge.yml` (fully automatic merge when safe)
- Triggers: pull_request (opened, synchronize, reopened, ready_for_review)
- Conditions for auto-merge:
  - All required status checks pass (CI green)
  - No merge conflicts
  - PR is not draft
  - Author is dependabot[bot] OR has label `auto-merge` OR is from a trusted team
  - Branch protection rules allow it
- Use `pascalgn/automerge-action` or official `gh pr merge --auto --squash`
- Prefer squash merge
- Delete branch after merge
- Comment on PR when auto-merge is enabled/queued

#### E. `dependabot-auto-merge.yml`
- Special handling for Dependabot
- Auto-merge only minor and patch updates
- Require CI to pass
- Major updates stay manual

#### F. `codeql.yml`
- Standard CodeQL analysis for JavaScript/TypeScript
- Upload results to GitHub Security tab

#### G. `lighthouse.yml`
- Run Lighthouse CI on the built site (or preview URL)
- Fail if performance < 90, accessibility < 95, best-practices < 95
- Upload report as artifact

#### H. `stale.yml`
- Mark and close inactive issues/PRs after 30/7 days
- Exempt issues with certain labels

### 5. Dependabot Configuration
```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
    labels: ["dependencies", "auto-merge"]
    commit-message:
      prefix: "chore(deps)"
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels: ["ci", "auto-merge"]
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "monthly"
6. Branch Protection & Repository Settings (document these)

main branch protection:
Require pull request reviews (1)
Require status checks: ci, CodeQL
Require conversation resolution
Do not allow force pushes
Allow auto-merge

Default merge method: Squash and merge
Automatically delete head branches
Enable GitHub Packages (GHCR)
Enable Dependabot alerts + security updates

7. Required Secrets & Variables
Document that the following must be set (or use GITHUB_TOKEN where possible):

No extra secrets needed for basic GHCR + semantic-release if using GITHUB_TOKEN with correct permissions
Optional: DOCKERHUB_*, any deployment tokens (Vercel, Railway, etc.)

8. Conventional Commits Enforcement

Add commitlint + husky (or use a workflow that checks PR titles)
PR title must follow Conventional Commits so semantic-release works correctly
Example allowed: feat:, fix:, chore:, docs:, refactor:, perf:, ci:

9. Extra Automation Nice-to-haves (include them)

On release → automatically create a discussion or post in a “Releases” category
Generate a beautiful GitHub Release body with changelog + Docker pull commands
Workflow that comments on PRs with the preview Docker image tag
Cache strategy that makes CI < 2 minutes on cache hit
Support for monorepo later (but keep simple for now)

10. Documentation
Create a clear .github/workflows/README.md that explains:

What each workflow does
How versioning works
How to force a release
How auto-merge behaves
How to add a new required check

Also create RELEASE.md with the exact process.
Implementation Rules

All workflows must use the latest stable actions (actions/checkout@v4, docker/setup-buildx-action@v3, etc.)
Use concurrency groups to cancel outdated runs
Prefer ubuntu-latest
Pin action versions with SHA when possible for security
Make every workflow idempotent and safe to re-run
Zero hardcoded secrets
Full TypeScript/Next.js awareness (cache .next, respect next.config.js output: 'standalone')

Start by generating all the files listed in the structure with production-ready, copy-pasteable content. Make the system completely automatic: push conventional commits to main → version bump → tag → GitHub Release → multi-arch Docker image pushed to GHCR → ready for deployment.
The final result must allow a developer to:

Open a PR
Get automatic CI + auto-merge (if labeled or Dependabot)
Merge to main
Automatically get a new version, release, and Docker image without touching anything else.