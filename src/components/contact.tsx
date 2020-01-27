import { ViewElement } from "./atoms"
import { GridProps, Grid } from "@theme-ui/components"
import React from "react"
import { FooterBlock } from "./page"
import { Link } from "./nav"

export const ContactDetails: ViewElement<GridProps> = props => (
  <Grid gap={4} columns={[2, null, 4]} {...props}>
    <FooterBlock title="Visit">
      Space4
      <br />
      113 Fonthill Road
      <br />
      London, N4 3HH
    </FooterBlock>

    <FooterBlock title="Contact">
      {/* <Link>Book a meeting</Link>
<Link>PGP Key</Link> */}
    </FooterBlock>

    <FooterBlock title="Elsewhere">
      <Link to="http://twitter.com/cmmonknowledge">Twitter</Link>
      <Link to="http://github.com/commonknowledge">Github</Link>
      {/* <Link>Git.coop</Link> */}
    </FooterBlock>

    <FooterBlock title="Support our work">
      <Link to="https://opencollective.com/commonknowledge/donate">
        Open Collective
      </Link>
      {/* <Link>Coinbase</Link> */}
    </FooterBlock>
  </Grid>
)
