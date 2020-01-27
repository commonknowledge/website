/** @jsx jsx */
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { ViewElement } from "../components/atoms"
import { ReactElement, ReactChildren, Children, isValidElement } from "react"
import { ReactNodeArray } from "prop-types"

const DefaultLayout: ViewElement = ({ children }) => (
  <div
    sx={{
      p: 3,
      img: { maxWidth: "100%" },
      hr: {
        my: 4,
        height: 1,
        backgroundColor: "#767676",
        border: "none",
      },
      ol: {
        position: "relative",
        listStyle: "none",
        pl: [3, null, 4],
        lineHeight: "125%",
        fontWeight: 500,
        mb: 3,
        fontSize: [15, null, 24],
        counterReset: "list-counter",
        "> li:before": {
          content: "counter(list-counter)",
          counterIncrement: "list-counter",
          position: "absolute",
          left: 0,
          color: "accent",
        },
        "> li:not(:last-of-type)": {
          mb: 2,
        },
      },
    }}
  >
    <MDXProvider
      components={{
        h1: props => (
          <h2
            sx={{
              m: 0,
              mb: 4,
              mt: [null, 3],
              fontWeight: 500,
              fontSize: [24, 32],
              lineHeight: ["125%", "110%"],
            }}
            {...props}
          />
        ),
        h2: props => (
          <h3
            sx={{
              m: 0,
              ml: [null, null, 3],
              mb: [3, null, 4],
              fontSize: [15, 18],
              fontWeight: 600,
              color: "accent",
              position: [null, null, "absolute"],
              left: 0,
            }}
            {...props}
          />
        ),
        h3: props => (
          <h4
            sx={{
              fontSize: 15,
              m: 0,
              mb: 2,
              fontWeight: 600,
            }}
            {...props}
          />
        ),
        h4: props => (
          <h4
            sx={{
              fontSize: 15,
              m: 0,
              mb: 1,
              fontWeight: 600,
            }}
            {...props}
          />
        ),
        p: props => (
          <p
            sx={{
              m: 0,
              lineHeight: "133%",
              fontSize: [15, 18],
              mb: 3,
            }}
            {...props}
          />
        ),
      }}
    >
      {layoutFromMarkdown(children as any)}
    </MDXProvider>
  </div>
)

type MdxElement = ReactElement<MdxElementProps>
type MdxElementProps = {
  mdxType: string
  children?: ReactChildren
}

const layoutFromMarkdown = (content: ReactChildren) => {
  const mdx = Array.isArray(content) ? content : [content]

  let group: MdxElement[] = []
  const groupedContent = []

  const isImageBlock = (x: MdxElement) => {
    const child =
      x && (Children.toArray(x.props.children)[0] as MdxElement | undefined)
    return isValidElement(child) && child.props.mdxType === "img"
  }

  const nextGroup = () => {
    if (isImageBlock(group[group.length - 1])) {
      const image = group.pop()

      groupedContent.push(
        <section
          sx={{
            display: "flex",
            flexDirection: ["column", null, "row"],
          }}
          key={groupedContent.length}
        >
          <div
            sx={{
              width: [null, null, "50%"],
              "h3 + *": {
                mt: [null, null, 5],
              },
            }}
            key={groupedContent.length}
          >
            {group}
          </div>
          <aside
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              ml: [null, null, 3],
            }}
          >
            {image}
          </aside>
        </section>
      )
    } else {
      groupedContent.push(
        <section
          key={groupedContent.length}
          sx={{ marginLeft: [null, null, "50%"] }}
        >
          {group}
        </section>
      )
    }

    group = []
  }

  for (const block of mdx) {
    if (
      isValidElement<MdxElementProps>(block) &&
      block.props.mdxType === "hr"
    ) {
      nextGroup()
      groupedContent.push(block)
    } else {
      group.push(block)
    }
  }

  nextGroup()
  return groupedContent
}

export default DefaultLayout
