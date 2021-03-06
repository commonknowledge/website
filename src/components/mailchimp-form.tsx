/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { ViewElement } from "./atoms"
import { Field, Button, Input, Grid, Label } from "@theme-ui/components"

export const MailChimpForm: ViewElement = props => (
  <Grid
    columns={[1, null, 2]}
    sx={{ bg: "black", color: "white", p: 4 }}
    {...props}
  >
    <h2 sx={{ m: 0, mb: [2, null, 4], fontSize: [15, null, 18] }}>
      Subscribe to our newsletter
    </h2>
    <form
      action="https://commonknowledge.us19.list-manage.com/subscribe/post?u=7d61a70102ab811e6282bee60&amp;id=b87cfcec60"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      noValidate
    >
      <Label sx={{ mb: 2 }} htmlFor="mce-EMAIL">
        Your email
      </Label>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
        }}
        id="mc_embed_signup"
      >
        <div sx={{ flex: 1 }}>
          <Input
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            required
          />
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div sx={{ position: "absolute", left: -5000 }} aria-hidden="true">
            <input
              type="text"
              name="b_7d61a70102ab811e6282bee60_b87cfcec60"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
        </div>
        <Button
          sx={{ maxWidth: [null, "8em"], ml: [null, 2], mt: [2, 0] }}
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
        >
          Subscribe
        </Button>
      </div>

      <div sx={{ mt: 3, fontSize: [11, 13] }}>
        By pressing Subscribe, I consent to recieving newsletters from Common
        Knowledge.
      </div>
    </form>
  </Grid>
)
