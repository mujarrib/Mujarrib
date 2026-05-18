// ─── SOCIAL LINKS CONFIG ─────────────────────────────────────────────────────
// Modifica qui i tuoi link social. Vengono usati sia nella SocialBar
// della homepage che nel footer.
//
// Campi disponibili per ogni link:
//   label  — testo accessibile (aria-label)
//   url    — URL di destinazione
//   icon   — "github" | "nostr" | "linkedin" | "twitter" | "email" | "rss" | "instagram" | "telegram" | "bluesky"
//   show   — true per mostrare, false per nascondere senza cancellare

export interface SocialLink {
  label: string
  url: string
  icon: "github" | "nostr" | "linkedin" | "twitter" | "email" | "rss" | "instagram" | "telegram" | "bluesky"
  show?: boolean
}

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/Mujarrib",
    icon: "github",
    show: true,
  },
  {
    label: "Nostr",
    url: "https://njump.me/",        // ← sostituisci con il tuo npub o profilo
    icon: "nostr",
    show: false,                      // ← metti true quando hai l'URL
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/",  // ← aggiungi il tuo handle
    icon: "linkedin",
    show: false,
  },
  {
    label: "Twitter / X",
    url: "https://x.com/",
    icon: "twitter",
    show: false,
  },
  {
    label: "Email",
    url: "mailto:harrycapta@gmail.com",
    icon: "email",
    show: false,
  },
  {
    label: "RSS",
    url: "/index.xml",
    icon: "rss",
    show: true,
  },
  {
    label: "Instagram",
    url: "https://instagram.com/mu.jarrib",     // ← aggiungi il tuo handle
    icon: "instagram",
    show: true,
  },
  {
    label: "Telegram",
    url: "https://t.me/Nghdmr",              // ← aggiungi username o link canale
    icon: "telegram",
    show: true,
  },
  {
    label: "Bluesky",
    url: "https://bsky.app/profile/", // ← aggiungi il tuo handle
    icon: "bluesky",
    show: false,
  },
]

export default socialLinks
