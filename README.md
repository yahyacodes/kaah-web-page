# Kaah Travel & Cargo

The Kaah landing page preserves the original layout, responsive grids, section spacing, and local font, with the official blue-and-green company branding. It includes interactive flight and cargo inquiries, WhatsApp handoffs, a keyboard-accessible FAQ and booking tabs, and mobile conversion controls.

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
- `app/globals.css`: original layout and styles plus Kaah adaptations; colors are CSS variables mapped in `tailwind.config.ts`.
- `app/layout.tsx`: metadata and locally bundled Inter Tight via next/font.
- `public/journey.svg`: local travel/cargo illustration. UI illustrations are HTML/CSS in `ProductMockup.tsx`.
- `/privacy` and `/terms`: informational pages describing the current inquiry flow and confirmation process. Review them for your operational policies before launch.

Testimonial data is marked `isPlaceholder: true` and visibly labelled as illustrative. Replace it with approved genuine feedback before presenting it as customer reviews. Destinations are inquiry topics, not direct-route guarantees. No invented prices, performance statistics, partners, certifications, or customer identities appear on the page.

The installed Next.js 16 version found in the workspace was preserved. This conversion does not downgrade framework dependencies.

## Verified

TypeScript, ESLint, and the production build pass. Browser checks cover widths of 320, 375, 768, 1024, 1280, and 1440 pixels with no horizontal overflow. Flight and cargo validation, WhatsApp message encoding and recipient, booking tabs, mobile navigation, FAQ, carousel, and contact dialog were checked without sending messages. Automated WCAG A/AA checks reported no violations at 1280px and 375px; this is not a claim of a complete manual accessibility audit. Privacy, terms, and the generated social image return successfully.

## Company branding

The supplied company logo is preserved unchanged in `public/brand/kaah-logo.jpeg`. `components/BrandLogo.tsx` displays it through a tightly framed SVG viewport, hiding only the surrounding white space. It is used in the navigation, footer, and booking panel. The browser icon and social card also use the original image.

Brand colors sampled from the supplied artwork are blue `#0D6BAB` and green `#55B146`. CSS variables at the top of `app/globals.css` control the shared palette, and the final official-identity block styles the branded surfaces. Darker companion colors maintain text contrast. The existing `lime` token remains a compatibility alias for brand green.
