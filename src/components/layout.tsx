/** @jsx jsx */
import { jsx, Box, Flex, Styled, Layout } from 'theme-ui';
import { theme, Theme } from './theme';
import Logo from './logo';
import { Link } from './nav';

const GridLayout: React.FC<{
    heading?: any
}> = ({ heading, children }) => (
    <Theme>
        <Layout sx={{ maxWidth: 1600 }}>
            <Flex
                sx={{
                    flexDirection: ["column", "column", "row"],
                }}
            >
                <Box
                    sx={{
                        position: ["relative", "fixed"],
                        top: [undefined, 0],
                        left: [undefined, 0],
                        width: ["100%", ...theme.minorColumnWidth],
                        fontFamily: "brand",
                    }}
                >
                    <Logo />
                </Box>
                {heading && <Box
                    sx={{
                        ml: [0, ...theme.minorColumnWidth],
                        pt: theme.padding,
                        px: theme.padding,
                        pb: 0,
                    }}
                >
                    {heading}
                </Box>}
            </Flex>
            <Box sx={{ ml: [0, ...theme.minorColumnWidth], pl: theme.padding, pr: theme.padding, pb: theme.padding, pt: 0 }}>
                {children}
            </Box>
            <Box
                sx={{
                    mt: 4,
                    position: ["relative", "fixed"],
                    bottom: 0,
                    left: 0,
                    padding: theme.padding,
                    pr: 0,
                    // pb: [5],
                    width: ["100%", ...theme.minorColumnWidth],
                    fontWeight: 600,
                    fontSize: [3, 2, 2, 3]
                }}
            >
                <div>Want to work with us?</div>
                <Link to="mailto:hello@commonknowledge.coop" sx={{ border: 'none', color: 'accent' }}>hello@commonknowledge.coop</Link>
                <Flex sx={{ mt: [4] }}>
                    <Link sx={{ mr: 2 }} to="http://twitter.com/cmmonknowledge">Twitter</Link>
                    <Link sx={{ mr: 2 }} to="http://github.com/commonknowledge">GitHub</Link>
                    <Link sx={{ mr: 2 }} to="https://opencollective.com/commonknowledge/donate">Donate</Link>
                </Flex>
            </Box>
        </Layout>
    </Theme>
)

export default GridLayout