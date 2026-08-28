MASTER PROMPT FOR LOVABLE – MOTOcare Auto Service Website
textBuild a complete, modern, dark-themed automotive service website called "MOTOcare" that exactly matches the design shown in the provided screenshot (three-panel mockup of a WordPress-style auto repair/service site). The design is bold, premium, industrial, high-contrast, with a dominant black/dark charcoal background (#0a0a0a / #111111), pure white text, and a vibrant primary red (#e11d48 / #ff1e1e / #dc2626) for all CTAs, accents, icons, and highlights. The overall aesthetic is professional, energetic, trustworthy, and conversion-focused for an auto repair / car customization / performance workshop.

### Core Tech Stack & Architecture Rules (Solid Principles – Non-negotiable)
- Next.js 14/15 App Router + TypeScript
- Tailwind CSS v3.4+ with full design-token system
- shadcn/ui for all components (Button, Card, Input, Accordion, Sheet, Dialog, NavigationMenu, Tabs, Badge, Separator, etc.)
- next-themes for dark/light mode (default = dark)
- lucide-react for all icons (consistent stroke width 1.5–2)
- Framer Motion for all animations and page transitions
- Centralized design system: ALL colors, spacing, radii, shadows, fonts, transitions live in one place only:
  - `tailwind.config.ts` (theme.extend)
  - `app/globals.css` (CSS variables + base styles + custom scrollbar)
  - No scattered utility classes for colors or spacing – always use design tokens
- Component structure follows Atomic Design + SOLID:
  - Atoms: Button, Icon, Badge, Typography
  - Molecules: ServiceCard, NewsCard, TeamCard, FeatureItem
  - Organisms: Header, Hero, ServicesGrid, AboutSection, Footer, Newsletter
  - Templates: HomePage layout
- Clean, semantic HTML, accessibility (ARIA, keyboard, focus rings), SEO-ready metadata
- Fully responsive: mobile-first, perfect on 320px → 1440px+
- Performance: lazy-load images, optimized fonts, minimal CLS

### Exact Design System Tokens (must be defined in tailwind.config + CSS variables)
Colors:
- background: #0a0a0a (main), #111111 (cards/sections), #1a1a1a (elevated)
- foreground: #ffffff
- muted: #a1a1aa / #71717a
- primary: #e11d48 (red) – use for every CTA, active state, icon accent, number, underline
- primary-foreground: #ffffff
- secondary: #1f1f1f
- border: #27272a
- accent red variants: #ff1e1e, #dc2626, #b91c1c
- success / other only if needed – stay strictly red + black + white + gray

Typography:
- Font: Inter or Geist Sans (prefer Inter)
- Hero headline: text-5xl / text-6xl / text-7xl font-bold tracking-tight
- Section titles: text-3xl / text-4xl font-bold
- Body: text-base / text-lg text-muted-foreground leading-relaxed
- Small labels: text-sm uppercase tracking-wider font-medium

Spacing & Layout:
- Container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Section padding: py-16 md:py-24 lg:py-32
- Card radius: rounded-xl or rounded-2xl
- Consistent gap-6 / gap-8

Shadows & Effects:
- Cards: subtle border + soft red glow on hover (shadow-[0_0_30px_-5px_rgba(225,29,72,0.3)])
- Buttons: solid red with hover scale + brightness

Custom Scrollbar (must be in globals.css):
```css
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: #0a0a0a; }
::-webkit-scrollbar-thumb { background: #e11d48; border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: #ff1e1e; }
/* Firefox */
* { scrollbar-width: thin; scrollbar-color: #e11d48 #0a0a0a; }
Dark / Light Mode Toggle

Use next-themes + shadcn ThemeProvider
Beautiful animated toggle in header (sun/moon icon with smooth rotate + scale)
Transition: all color/background changes use transition-colors duration-300 ease-in-out
Light mode should invert cleanly (white backgrounds, dark text, same red primary) but keep the premium automotive feel
Persist preference

Animations (Framer Motion – must feel premium)

Page load: staggered fade-up for hero, services, cards
Scroll-triggered: whileInView with once + margin
Hover: scale-[1.02], translate-y-[-4px], red glow, icon color change
Buttons: whileHover scale 1.05, whileTap scale 0.97
Numbers (01, 02, 03): count-up or subtle pulse
Image hover: subtle zoom + red overlay
Mobile menu: slide-in from right with backdrop blur
Smooth section transitions

Exact Page Structure & Content (Home page – match screenshot 1:1)

Header (sticky, glass/blur on scroll)
Logo left: “MOTOcare” with red car silhouette icon
Nav: Home | About Us (dropdown) | Services (dropdown) | Pages (dropdown) | Contact
Right: search icon + Contact button (red outline or solid)
Mobile: hamburger → Sheet

Hero Section
Full-width dark background with subtle red gradient/overlay and car silhouette
Left: large white headline “Building Your Dream Car”
Subtext (lorem or realistic auto copy)
Big red “Learn More” button
Right: high-quality red sports car image (front 3/4 view) – use Unsplash or placeholder with exact vibe (modern red coupe)
Bottom overlay strip with 3 feature items:
01 Best Services
02 Comfortable
03 Expert Team
(each with short description + red number)


About Us / Workshop Section
Two-column: left image of mechanics in red overalls working on red car, right text “About Us” + paragraph + red “Read More” button
Image should show professional garage atmosphere

Our Services (or Modification Your Car)
Section title “Modification Your Car”
3 big cards with icons (lucide: Car, Paintbrush, Wrench or similar):
Modification Car
Car Painting
Car Repair

Each card has short text + “Learn More →”
Hover: red border + glow

Good Cars / Featured Work
Split layout: left text + red CTA, right two stacked images (mechanic changing tire + red badge “Top Modification”)

Our Gallery
Horizontal or grid of 4–6 high-quality car/wheel/engine photos
Overlay captions on hover

Why Choose Us / Partners
Logos row: SPEED AUTO, Quality, AUTOF AST, etc. (white/gray logos)
Team Expert section with 2–3 mechanic photos in red uniforms + social icons

Latest News / Blog
2–3 news cards with image, title (“Top 5 Performance Upgrades for 2024”, “Brake Maintenance: What You Need to Know”), “Read More →”

Need Help? CTA Banner
Full-width red/black gradient background
Mechanic image on right
Text “Need Help? Contact our experts for fast and reliable service”
Red “Contact Us” button

Newsletter
Dark section “Our Newsletter” / “Subscribe for Updates”
Email input + red “Subscribe” / “Submit Button”
Short description

Footer
4 columns: Logo + socials | About Us links | Contact Us (phone, email, address) | We Are Open (hours)
Bottom copyright “© 2021 Motocare Template – All Rights Reserved”
Red accents on links/hover


Images Required (use high-quality Unsplash / Pexels placeholders or generate consistent ones)

Hero: modern red sports car (Ferrari-like or Porsche-like)
Workshop: two mechanics in red jumpsuits working under hood of red car
Gallery: close-ups of wheels, engine bay, polished red car, exhaust, etc.
Team: professional male mechanics smiling in red uniforms
News: engine close-up, brake disc, etc.
Need Help: mechanic with tools under car or at workbench
All images must have dark/red color grading to match the theme. Use next/image with proper sizes + blur placeholders.

Icons

Exclusive use of lucide-react
Service icons: Car, Gauge, Disc, Wrench, PaintBucket, Settings, ShieldCheck, Users, etc.
Consistent size (24–32px) + red color on hover or always accent

Additional Pages (create basic routing)

/about
/services
/services/[slug]
/blog
/blog/[slug]
/contact
/gallery
All pages must inherit the same header/footer, colors, and animation system.

Extra Polish Requirements

Custom cursor optional (red ring) – nice but not mandatory
Smooth scroll
Loading skeleton for cards
Form validation on newsletter + contact (react-hook-form + zod)
Toast notifications (shadcn sonner)
SEO: proper title, description, OpenGraph for MOTOcare
Accessibility score target 95+

Start by creating the full design system (globals.css + tailwind.config), then Header + Hero, then systematically build every section matching the screenshot layout, spacing, and visual hierarchy exactly. Use placeholder images that look identical in mood and color to the ones in the mockup. Make the site feel alive with micro-interactions while remaining clean and professional.
Priority order:

Perfect visual match to the dark red automotive aesthetic
Centralized, maintainable design tokens
Smooth dark/light toggle + custom red scrollbar
Framer Motion animations
shadcn + Tailwind best practices
Responsive excellence