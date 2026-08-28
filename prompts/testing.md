## Create a full, production-grade testing system for the MOTOcare Next.js auto-service website. The testing setup must be comprehensive, maintainable, fast, and fully integrated with the existing CI/CD, Docker, and GitHub Actions workflows. Follow solid testing principles (AAA pattern, isolation, determinism, clear naming) and cover every critical part of the site.

### 1. Testing Stack (mandatory – do not change)

- **Unit & Component**: Vitest + React Testing Library + @testing-library/jest-dom + @testing-library/user-event
- **E2E**: Playwright (latest) with TypeScript
- **Accessibility**: axe-core + @axe-core/playwright + jest-axe
- **Coverage**: Vitest coverage (v8 provider) + Playwright coverage if possible
- **Visual / Snapshot**: Playwright screenshots + optional Percy or Chromatic-ready structure
- **Mocking**: MSW (Mock Service Worker) for API routes if any
- **Utilities**: @testing-library/react-hooks (if needed), next-router-mock, happy-dom or jsdom

All tests must run in CI and fail the pipeline on any failure or coverage drop.

### 2. Folder Structure (create exactly)
├── tests/                     # or tests/ (choose one and stay consistent)
│   ├── unit/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── hooks/
│   │   └── utils/
│   ├── integration/
│   └── setup.ts
├── e2e/
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   ├── services.spec.ts
│   ├── contact.spec.ts
│   ├── dark-mode.spec.ts
│   ├── accessibility.spec.ts
│   ├── forms.spec.ts
│   ├── responsive.spec.ts
│   └── fixtures/
├── playwright.config.ts
├── vitest.config.ts
├── vitest.setup.ts
├── .storybook/                    # optional but recommended for component isolation
└── coverage/
text### 3. Vitest Configuration Requirements

- Environment: happy-dom or jsdom
- Globals: true
- Setup files: vitest.setup.ts (import @testing-library/jest-dom, MSW server, etc.)
- Coverage thresholds (fail CI if below):
  - Statements: 80%
  - Branches: 75%
  - Functions: 80%
  - Lines: 80%
- Path aliases must match tsconfig (`@/`)
- CSS modules / Tailwind handling
- Exclude e2e, node_modules, .next, coverage

### 4. Playwright Configuration Requirements

- projects: chromium, firefox, webkit + mobile (Pixel 5, iPhone 13)
- baseURL: http://localhost:3000 (or from env)
- webServer: automatic `npm run dev` or `npm run start` before tests
- screenshot: only-on-failure
- video: retain-on-failure
- trace: on-first-retry
- Fully parallel
- Retry: 2 on CI
- Timeout: 30s default, higher for slow pages
- Storage state for authenticated flows if later needed
- Global setup/teardown if required

### 5. What Must Be Tested (coverage matrix)

#### A. Unit / Component Tests (Vitest + RTL)
- All shadcn-based components (Button, Card, Input, etc.) with variants
- Custom components: Header, Hero, ServiceCard, NewsCard, TeamCard, Footer, NewsletterForm
- Dark / light mode toggle behavior
- Form validation (newsletter, contact form) with react-hook-form + zod
- Utility functions and hooks
- Icon rendering and accessibility attributes
- Conditional rendering and loading states

#### B. Integration Tests
- Header navigation + mobile menu open/close
- Theme provider + next-themes switching
- Newsletter subscription flow (mocked)
- Service cards interaction

#### C. E2E Tests (Playwright) – highest priority
1. **Home page**
   - Loads correctly
   - Hero headline “Building Your Dream Car” visible
   - All main sections present (Services, About, Gallery, News, Newsletter, Footer)
   - Red primary color CTAs work
2. **Navigation**
   - Desktop menu links
   - Mobile hamburger → Sheet opens and closes
   - Active link highlighting
3. **Dark / Light Mode**
   - Toggle works
   - Preference persists on reload
   - Smooth transition (no flash)
   - All critical elements remain readable
4. **Forms**
   - Newsletter: empty → error, valid email → success toast
   - Contact form: full validation + submission
5. **Responsive**
   - 320px, 768px, 1024px, 1440px layouts
   - No horizontal scroll
   - Images and cards stack correctly
6. **Accessibility**
   - axe-core scan on every major page (0 critical / serious violations)
   - Keyboard navigation (Tab, Enter, Escape)
   - Focus visible
   - ARIA labels on icons and buttons
7. **Performance & Visual**
   - Largest Contentful Paint indicators
   - Screenshot comparison of key sections (hero, services, footer)
8. **Error & Edge cases**
   - 404 page
   - Slow network simulation
   - JavaScript disabled graceful degradation (basic)

### 6. Test Data & Fixtures
- Create realistic mock data for services, news, team members matching the MOTOcare content
- Use fixtures for forms
- MSW handlers for any future API routes

### 7. Scripts to add in package.json

```json
"test": "vitest",
"test:ui": "vitest --ui",
"test:coverage": "vitest run --coverage",
"test:e2e": "playwright test",
"test:e2e:ui": "playwright test --ui",
"test:e2e:headed": "playwright test --headed",
"test:a11y": "playwright test accessibility.spec.ts",
"test:ci": "vitest run --coverage && playwright test"
8. CI Integration (update existing workflows)

In ci.yml add a test job that runs npm run test:ci
Cache Playwright browsers
Upload coverage reports (Codecov or GitHub artifacts)
Upload Playwright report and screenshots on failure
Fail the PR if coverage drops below thresholds or any test fails
Run E2E only on main + pull requests (not on every push to feature branches if too slow)

9. Quality Rules for Writing Tests

Descriptive test names: should show error when email is invalid
Follow AAA (Arrange – Act – Assert)
Prefer userEvent over fireEvent
Query by role, label, text (never by class or id unless necessary)
No implementation details testing
Keep tests independent and parallelizable
Use data-testid only as last resort
Snapshot tests only for stable UI pieces
Every new component or page must come with tests

10. Extra Requirements

Support for testing Framer Motion (mock or reduce motion)
Test custom scrollbar does not break layout
Verify red primary color contrast (WCAG AA)
Docker-friendly: tests must run inside the CI container without display (Playwright handles this)
Clear README section: “How to run tests locally” and “How to debug failing E2E”

Delivery Order

Install all dependencies and create config files (vitest.config.ts, playwright.config.ts, setup files)
Add the npm scripts
Write a solid set of component tests for Header, Hero, ServiceCard, NewsletterForm, ThemeToggle
Write complete E2E suite covering the matrix above
Add accessibility tests with axe
Update CI workflow so test:ci is a required check
Generate example coverage report and Playwright HTML report configuration

Make the entire testing system ready for a professional production site: fast feedback locally, reliable in CI, high confidence on every pull request, and zero tolerance for accessibility or visual regressions on the core user journeys.