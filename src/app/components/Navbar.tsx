"use client";
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

// Styled components
const NavContainer = styled(AppBar)({
    background: "#fff",
    width: "100%",
    display: "flex",
    boxShadow: "none",
});

const Logo = styled(Typography)({
    fontWeight: "bold",
    fontSize: "25px",
    color: "#000",
    alignItems: "center",
});

const Dot = styled("span")({
    color: "blue",
    fontSize: "20px",
});

const NavLinks = styled(Box)({
    display: "flex",
    gap: "35px",
    background: "white",
    padding: "10px 20px",
    borderRadius: "20px",
});

const NavButton = styled(Button)({
    color: "#000",
    fontWeight: "500",
    "&:hover": {
        backgroundColor: "#f5f5f5",
    },
});

const ContactButton = styled(Button)({
    borderRadius: "25px",
    border: "1px solid black",
    padding: "0.5rem 1.5rem",
    color: "#000",
    fontWeight: "500",
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    transition: "all 0.3s",
    "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
    },
});

// Extend the props
const Navbar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    return (
        <NavContainer position="static">
        <Container sx={{ maxWidth: "1000px", margin: "0 auto" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link href="/" passHref>
                <Logo>
                TIGER<Dot>.</Dot>
                </Logo>
            </Link>

            {/* Desktop Navigation - Hidden on Mobile */}
            {!isMobile ? (
                <NavLinks>
                <Link href="/" passHref>
                    <NavButton>Home</NavButton>
                </Link>
                <Link href="/about" passHref>
                    <NavButton>About me</NavButton>
                </Link>
                <Link href="/services" passHref>
                    <NavButton>Services</NavButton>
                </Link>
                <Link href="/work" passHref>
                    <NavButton>My work</NavButton>
                </Link>
                <Link href="/contact" passHref>
                    <ContactButton>
                    CONTACT <ArrowForwardIcon fontSize="small" />
                    </ContactButton>
                </Link>
                </NavLinks>
            ) : null}

            {/* Mobile Hamburger Menu (Moved to Right) */}
            {isMobile && (
                <IconButton onClick={handleDrawer(true)} sx={{ color: "#000", marginLeft: "auto" }}>
                <MenuIcon />
                </IconButton>
            )}
            </Toolbar>
        </Container>

        {/* Mobile Drawer (Menu) */}
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawer(false)}>
            <Box sx={{ width: 250, padding: "20px" }}>
            {/* Close Icon */}
            <IconButton onClick={handleDrawer(false)} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CloseIcon />
            </IconButton>

            <List>
                {["Home", "About me", "Services", "My work", "Contact"].map((text, index) => (
                <ListItem button key={index} onClick={handleDrawer(false)}>
                    <Link href={`/${text.toLowerCase().replace(" ", "-")}`} passHref>
                    <ListItemText primary={text} />
                    </Link>
                </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>
        </NavContainer>
    );
};

export default Navbar;



