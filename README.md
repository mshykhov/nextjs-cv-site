# CV Site

Personal CV/portfolio site built with Next.js, React, TypeScript, and Tailwind CSS. Deployed as a static site on Cloudflare Pages with a custom domain.

**Live:** [mshykhov.com](https://mshykhov.com)

## Preview

<details>
<summary>Desktop</summary>
<p align="center">
  <img src="docs/preview-desktop.png" width="700" alt="Desktop preview" />
</p>
</details>

<details>
<summary>Mobile</summary>
<p align="center">
  <img src="docs/preview-mobile.png" width="250" alt="Mobile preview" />
</p>
</details>

## Tech Stack

- Next.js 15 (static export)
- React 19
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build the static export:

```bash
npm run build
```

Output will be in the `out/` directory.

## Deployment Guide

Full guide to deploy your own CV site with a custom domain on Cloudflare Pages.

### 1. Buy a Domain on Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) and create an account (or log in)
2. Navigate to **Domain Registration** > **Register Domains**
3. Search for the domain you want and complete the purchase
4. The domain will be automatically added to your Cloudflare account with DNS managed by Cloudflare

> If you already own a domain elsewhere, you can transfer it to Cloudflare or just add it to Cloudflare by changing your nameservers. Go to **Websites** > **Add a site** and follow the instructions.

### 2. Repository Setup

1. Create a new GitHub repository

2. Clone and set up the project:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   npm install
   ```

3. Edit your personal data in `src/data/resume.ts`

4. Replace `public/resume.pdf` with your own CV file

5. Push to GitHub:
   ```bash
   git add .
   git commit -m "init: my cv site"
   git push origin main
   ```

### 3. Cloudflare Pages Setup

#### Connect Repository

1. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**
2. Authorize Cloudflare to access your GitHub account
3. Select your repository

#### Configure Build Settings

| Setting | Value |
|---|---|
| **Production branch** | `main` |
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |

Click **Save and Deploy**. Wait for the first build to complete.

#### Connect Custom Domain

1. Go to your Pages project > **Custom domains** > **Set up a custom domain**
2. Enter your domain (e.g., `mshykhov.com`)
3. Cloudflare will automatically configure the DNS records
4. Optionally add `www.mshykhov.com` as well (it will redirect to the root domain)
5. Wait a few minutes for DNS propagation and SSL certificate provisioning

After setup, every push to `main` will automatically trigger a new deployment.

## Project Structure

```
src/
  app/          # Next.js pages and layout
  components/   # React components (Header, Experience, Education, etc.)
  data/         # CV content (resume.ts)
public/         # Static assets (PDF, favicon)
```

## Customization

All CV content is in `src/data/resume.ts`. Edit this file to update your personal info, work experience, education, and tech stack.
