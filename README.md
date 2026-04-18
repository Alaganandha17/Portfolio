# Alaganandha Pradeep — Portfolio

An editorial Next.js portfolio built with App Router, Tailwind CSS, and smooth scroll animations talking about everything from art projects to engineering projects

---

## Has a One-click start Option

### Mac / Linux
```bash
./START.sh
```

### Windows
Double-click `START.bat`

That's it. It installs dependencies and opens the dev server at **http://localhost:3000**

> Requires **Node.js 18+** installed. Download from https://nodejs.org

---

## Adding your photos & videos

Just drop files into these folders — the site picks them up automatically:

| Folder | File naming | Shows in |
|---|---|---|
| `public/art/` | `art1.jpg`, `art2.png`, … | Art Gallery section |
| `public/activities/` | `pic1.jpg`, `pic2.png`, … | Activities section |
| `public/videos/` | `vid1.mp4`, `vid2.webm`, … | Videos section |

Any image format works: `.jpg` `.jpeg` `.png` `.webp` `.gif`  
Any video format works: `.mp4` `.webm` `.ogg`

---

##  Adding your photo

Drop your photo as `public/me.jpg` (or `me.png`) — it'll appear in the hero section automatically.

---

## 🔗 Updating your links

Search for `YOUR_GITHUB` and `YOUR_LINKEDIN` in these files and replace with your actual URLs:

- `components/HeroSection.tsx`
- `components/Projects.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/Navbar.tsx`

---

##  Adding more projects

Open `components/Projects.tsx` and add to the `projects` array at the top. Each project takes:

```ts
{
  title: "Project Name",
  subtitle: "Short tagline",
  year: "2025",
  description: "What it does and what's interesting about it.",
  tech: ["Python", "React"],
  highlight: "Key metric or feature",
  color: "#hexcolor",   // accent colour for the card
  big: false,           // set true for the large featured card (only one at a time)
}
```

---

##  Manual commands

```bash
npm install       # install dependencies
npm run dev       # start dev server (localhost:3000)
npm run build     # production build
npm start         # serve production build
```

---

##  Project structure

```
portfolio/
├── app/
│   ├── layout.tsx       # root layout + metadata
│   ├── page.tsx         # assembles all sections
│   └── globals.css      # design system (colours, fonts, utilities)
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx  # editorial hero with scroll parallax
│   ├── About.tsx
│   ├── Projects.tsx     # bento grid
│   ├── Skills.tsx
│   ├── ArtGallery.tsx   # auto-reads public/art/
│   ├── Activities.tsx   # auto-reads public/activities/
│   ├── VideoGallery.tsx # auto-reads public/videos/
│   ├── AutoVideo.tsx    # intersection-observer autoplay
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx       # scroll reveal utility
└── public/
    ├── me.jpg           # ← drop your photo here
    ├── art/             # ← drop art images here
    ├── activities/      # ← drop activity photos here
    ├── videos/          # ← drop videos here
    └── Alaganandha_Pradeep_Resume_Meesho.pdf
```
