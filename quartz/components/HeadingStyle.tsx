import { QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/headings.inline"

export default (() => {
  function HeadingStyle() {
    return null
  }

  HeadingStyle.afterDOMLoaded = script

  return HeadingStyle
}) satisfies QuartzComponentConstructor
