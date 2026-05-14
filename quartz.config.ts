import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mujarrib",
    pageTitleSuffix: " | Mujarrib",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "mujarrib.github.io/Mujarrib",
    ignorePatterns: ["private", "_templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Mono",
        body: "IBM Plex Mono",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#0a0a0a",
          lightgray: "#1a1a1a",
          gray: "#3a3a3a",
          darkgray: "#b0b0b0",
          dark: "#e8e8e8",
          secondary: "#39ff14",
          tertiary: "#00cc0a",
          highlight: "rgba(57, 255, 20, 0.08)",
          textHighlight: "rgba(57, 255, 20, 0.25)",
        },
        darkMode: {
          light: "#0a0a0a",
          lightgray: "#1a1a1a",
          gray: "#3a3a3a",
          darkgray: "#b0b0b0",
          dark: "#e8e8e8",
          secondary: "#39ff14",
          tertiary: "#00cc0a",
          highlight: "rgba(57, 255, 20, 0.08)",
          textHighlight: "rgba(57, 255, 20, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
