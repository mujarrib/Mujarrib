import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return (
      <div class={classNames(displayClass, "article-title-wrapper")}>
        <h1 class="article-title article-title-decorative">{title}</h1>
        <p class="article-title-readable">{title}</p>
      </div>
    )
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title-wrapper {
  margin: 2rem 0 0 0;
}
.article-title {
  margin: 0;
}
.article-title-readable {
  font-family: var(--bodyFont);
  font-size: 1rem;
  color: var(--gray);
  margin: 0.2rem 0 0 0;
  letter-spacing: 0.02em;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
