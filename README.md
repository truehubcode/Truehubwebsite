# TrueHub Tech & Systems — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4. No database, no CMS: all content lives in
plain TypeScript files under `src/data/` so it is easy to edit.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Edit content

| What                                                  | File                       |
| ----------------------------------------------------- | -------------------------- |
| Phone, WhatsApp, email, address, social links, stats  | `src/data/site.ts`         |
| Product catalogue                                     | `src/data/products.ts`     |
| Brands                                                | `src/data/brands.ts`       |
| Product categories                                    | `src/data/categories.ts`   |
| Services                                              | `src/data/services.ts`     |
| Industries                                            | `src/data/industries.ts`   |
| Home-page slideshow (below the headline)              | `src/data/slides.ts`       |

### Logo
Drop the original logo at `public/logo.png` and it is used automatically in the header and footer.
Until then a vector recreation of the logo (`src/components/Logo.tsx`) is shown.

### Product photos
Add `image: "/products/<file>.jpg"` to a product in `src/data/products.ts` and place the file in
`public/products/`. Products without an image show a category illustration.

### Enquiry form
The quote form posts to `src/app/api/quote/route.ts`, which validates and logs the enquiry.
Hook it to email or a CRM there (see the comment in the file). Visitors are also offered a
one-click WhatsApp message after submitting.

## Deploy
Works out of the box on Vercel, Netlify or any Node host (`npm run build && npm start`).
Set the live domain in `src/data/site.ts` (`url`) so the sitemap and Open Graph tags are correct.
