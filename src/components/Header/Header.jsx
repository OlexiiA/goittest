import { Box, Nav, NavItem } from './Header.styled'

const headerItems = [
    { to: "/", title: "Home" },
    { to: "tweets", title: "tweets" }
]

export const Header = () => {

    return (
        <Box>
            <Nav>
                {headerItems.map((headerItem) => (
                    <li key={headerItem.title}>
                        <NavItem to={headerItem.to}>{headerItem.title}</NavItem>
                    </li>
                ))}
            </Nav>
        </Box>
    )
}