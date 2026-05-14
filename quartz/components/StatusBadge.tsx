import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const icons: Record<string, string> = {
  seedling: "🌱",
  budding: "🌿",
  evergreen: "🌲",
}

export default (() => {
  function StatusBadge({ fileData }: QuartzComponentProps) {
    const status = fileData.frontmatter?.status as string | undefined
    if (!status || !icons[status]) return null

    return (
      <span class="status-badge" title={status}>
        {icons[status]} <em>{status}</em>
      </span>
    )
  }

  StatusBadge.css = `
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.3em;
      font-size: 0.85em;
      color: var(--gray);
      margin-bottom: 0.5rem;
    }
    .status-badge em {
      font-style: normal;
    }
  `

  return StatusBadge
}) satisfies QuartzComponentConstructor
