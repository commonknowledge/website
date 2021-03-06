/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React, { Fragment } from "react"
import { PageGlobal, PageFooterCommon } from "./src/components/page"

export const wrapRootElement = ({ element }) => {
  return <PageGlobal>{element}</PageGlobal>
}

export const wrapPageElement = ({ element }) => (
  <Fragment>
    {element}
    <PageFooterCommon />
  </Fragment>
)

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      key={3}
      className="_iub_cs_activate"
      data-iub-purposes="3"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
          var u="https://commonknowledgecoop.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/commonknowledgecoop.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
          `.trim(),
      }}
    />,
  ])
}
