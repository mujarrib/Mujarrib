function applyRunicHeadings() {
  const article = document.querySelector("article")
  if (!article) return

  article.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
    if (heading.querySelector(".heading-runic")) return

    const text = heading.childNodes[0]?.textContent ?? ""

    const runic = document.createElement("span")
    runic.className = "heading-runic"
    runic.textContent = text

    const readable = document.createElement("span")
    readable.className = "heading-readable"
    readable.textContent = text

    heading.innerHTML = ""
    heading.appendChild(runic)
    heading.appendChild(readable)
  })
}

function applyRunicTo(selector: string) {
  document.querySelectorAll(selector).forEach((el) => {
    if (el.querySelector(".nav-readable")) return
    const text = el.textContent?.trim() ?? ""
    if (!text) return
    el.textContent = ""

    const runic = document.createElement("span")
    runic.className = "nav-runic"
    runic.textContent = text

    const readable = document.createElement("span")
    readable.className = "nav-readable"
    readable.textContent = text

    el.appendChild(runic)
    el.appendChild(readable)
  })
}

function applyRunicSidebar() {
  applyRunicTo(".folder-container ul li a")
  applyRunicTo(".folder-container ul li button span")
  applyRunicTo(".breadcrumb-element p")
  applyRunicTo("a.internal.tag-link")
  applyRunicTo("a.external")
}

function init() {
  applyRunicHeadings()
  applyRunicSidebar()
}

document.addEventListener("nav", init)
init()
