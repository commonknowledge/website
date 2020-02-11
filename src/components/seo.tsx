/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta = [], title, url }: {
	description?: string
	lang?: string
	meta?: any[]
	title?: string
	url?: string
}) {
	const { site } = useStaticQuery(
		graphql`
	  query {
		site {
		  siteMetadata {
			title
			description
			author
			siteUrl
		  }
		}
	  }
	`
	)

	const metaDescription = description || site.siteMetadata.description
	const _url = url || site.siteMetadata.siteUrl
	const _title = title ? title.includes('Common Knowledge') ? title : title + ' — Common Knowledge' : 'Common Knowledge'

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={_title}
			link={[
				{
					rel: `alternate`,
					type: `application/rss+xml`,
					title: `Common Knowledge`,
					href: `${site.siteMetadata.siteUrl}/rss.xml`,
				}
			]}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: _url,
				},
				{
					property: "og:image",
					content: `${site.siteMetadata.siteUrl}/sharecard.jpg`
				},
				{
					name: `twitter:card`,
					content: `summary_large_image`,
				},
				{
					name: `twitter:site`,
					content: "@cmmonknowledge"
				},
				{
					name: `twitter:creator`,
					content: "@cmmonknowledge"
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: "twitter:image",
					content: `${site.siteMetadata.siteUrl}/sharecard.jpg`
				},
			].concat(meta)}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
