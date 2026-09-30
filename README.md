# Kaah Travel & Cargo

The Kaah landing page preserves the original layout, responsive grids, section spacing, and Google Poppins font, with the official blue-and-green company branding. It includes interactive flight and cargo inquiries, WhatsApp handoffs, a keyboard-accessible FAQ and booking tabs, and mobile conversion controls.

## Run

```sh
npm install
cp .env.example .env.local # Only for a fresh checkout; preserve an existing .env.local.
# Set NEXT_PUBLIC_WHATSAPP_NUMBER to Kaah's international WhatsApp number.
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck`, `npm run lint`, and `npm run build` for validation. `npm start` serves a production build.

## Contact configuration

`NEXT_PUBLIC_WHATSAPP_NUMBER` is the single source for the recipient, in international format. The supplied business number is configured in this workspace's ignored `.env.local`. Configure it again in your hosting environment before building. Public environment variables are embedded at build time; restart/rebuild after changing them.

Set `NEXT_PUBLIC_SITE_URL` to the production website origin for social image URLs. Vercel deployments can also use their automatically supplied production URL. Local previews fall back to localhost.

Optional `NEXT_PUBLIC_PHONE_NUMBER` and `NEXT_PUBLIC_OFFICE_ADDRESS` are shown only when supplied. Without them, Call Us and Visit Our Office direct visitors to ask the team through WhatsApp. No separate phone line or address is invented.

## Inquiry flow

- `components/LeadForm.tsx` exports shared `LeadForm`, `FlightInquiryForm`, and `CargoQuoteForm`.
- Forms validate required fields, cities, dates, passenger counts, positive weights, and phone format.
- `lib/whatsapp.ts` formats and encodes the inquiry and builds the WhatsApp URL.
- Valid submissions open WhatsApp with the details. The visitor must send the message there; the website does not claim it has sent the inquiry.
- A visible fallback link allows opening the prepared message if the browser blocks a popup.
- No backend or storage is implemented. Form details are logged only in development.
- Missing or invalid WhatsApp configuration produces an explicit error; it never uses a made-up number.

## Editing

- `data/site-content.ts`: navigation, services, modules, destinations, FAQs, testimonial placeholders, and footer links.
- `components/`: existing section files retained and adapted. `BookingPanel.tsx`, `WhatsAppButton.tsx`, and `ContactControls.tsx` provide shared interactions.
- `app/globals.css`: section-labelled styles and responsive rules; colors are CSS variables mapped in `tailwind.config.ts`.
- `app/layout.tsx`: metadata and Google Poppins loaded and self-hosted by `next/font/google`.
- `public/journey.svg`: local travel/cargo illustration. UI illustrations are HTML/CSS in `ProductMockup.tsx`.
- `/privacy` and `/terms`: informational pages describing the current inquiry flow and confirmation process. Review them for your operational policies before launch.

Testimonial data is marked `isPlaceholder: true` and visibly labelled as illustrative. Replace it with approved genuine feedback before presenting it as customer reviews. Destinations are inquiry topics, not direct-route guarantees. No invented prices, performance statistics, partners, certifications, or customer identities appear on the page.

The installed Next.js 16 version found in the workspace was preserved. This conversion does not downgrade framework dependencies.

## Verified

TypeScript, ESLint, and the production build pass. Browser checks cover widths of 320, 375, 768, 1024, 1280, and 1440 pixels with no horizontal overflow. Flight and cargo validation, WhatsApp message encoding and recipient, booking tabs, mobile navigation, FAQ, carousel, and contact dialog were checked without sending messages. Automated WCAG A/AA checks reported no violations at 1280px and 375px; this is not a claim of a complete manual accessibility audit. Privacy, terms, and the generated social image return successfully.

## Company branding

The supplied company logo is preserved unchanged in `public/brand/kaah-logo.jpeg`. `components/BrandLogo.tsx` displays it through a tightly framed SVG viewport, hiding only the surrounding white space. It is used in the navigation, footer, and booking panel. The browser icon and social card also use the original image.

Brand colors sampled from the supplied artwork are blue `#0D6BAB` and green `#55B146`. CSS variables at the top of `app/globals.css` control the shared palette, and the final official-identity block styles the branded surfaces. Darker companion colors maintain text contrast. The existing `lime` token remains a compatibility alias for brand green.

## Keeping the code readable

Run `npm run format` after editing to format source files, styles, configuration, and documentation. Run `npm run format:check` to check formatting without changing files. Formatting settings live in `.prettierrc.json`; generated files and downloaded assets are excluded in `.prettierignore`.

Each component and named helper has a short comment describing its purpose. Keep comments focused on intent and update them when behavior changes. Small inline rendering callbacks stay next to the JSX they affect.

### Common changes

- **Page text and countries:** edit `data/site-content.ts`. Each destination has a name and a local flag path; use `null` for a card without a country flag.
- **Flag artwork:** `public/flags/` contains SVGs downloaded from FlagCDN for Kenya, Somalia, UAE, Türkiye, and China. The country name next to each flag provides its accessible label.
- **Colors and decorative panels:** edit the `--surface-*` tokens and the commented surface styles in `app/globals.css`. Panels use layered shapes and soft brand colors without CSS gradients.
- **Navbar shadow:** `components/Navbar.tsx` tracks whether the page has scrolled more than 12 pixels. `.navbar-scrolled` defines its shadow, and the scroll listener is removed when the component unmounts.
- **Fonts:** adjust Poppins weights and loading in `app/layout.tsx`. Google font files are fetched during the build and served locally afterward.

After behavior changes, run `npm run lint`, `npm run typecheck`, and `npm run build`. Check the affected interaction at desktop and mobile widths.

## Photography

Photos live in `public/images/`. Edit `data/site-images.ts` to replace an image, update its alt text, or adjust its crop. The hero and service cards share the flight photo; the closing contact section uses the airport luggage photo. Next.js generates responsive image sizes and blurred placeholders. Only the hero photo loads with priority; the other photos load lazily.

These are illustrative stock photos, not photographs of Kaah staff, customers, or company-owned facilities. Source credits and license links are in `public/images/CREDITS.md`.

### Images across the page

`components/SectionPhoto.tsx` is the shared image component for the challenge cards, detailed service forms, process steps, About story, FAQ, and destination gallery. Give its container a height in `app/globals.css` and supply a responsive `sizes` value. The component reserves the container space and provides a blurred placeholder while loading.

`data/site-images.ts` contains the `moduleImages`, `stepImages`, `sectionImages`, and `destinationImages` collections. Country entries in `data/site-content.ts` pair each local city photograph with its flag. Destination photos load eagerly so the scrolling gallery always has its next image ready; other section images load lazily. Existing testimonial placeholders remain text-only so stock photographs are not mistaken for real customers.
