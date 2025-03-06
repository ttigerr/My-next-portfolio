import React from "react";
import { AppBar, Toolbar, Typography, Box, Tab} from "@mui/material";
import Link from "next/link";

const NavBar = () => {
    return (
        <AppBar component='nav' color="black">
            <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                <Typography variant="h4">TIGER.</Typography>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    <Tab label="Home" value="1" href="/" />
                    <Tab label="About" value="1" href="/" />
                    <Tab label="Work" value="1" href="/" />
                    <Tab label="Skill" value="1" href="/" />
                    <Tab label="Contact" value="1" href="/" />
                </Box>
                <Box sx={{display:{xs:'flex', md:'none'}}}>
                    <Tab label="Home" value="1" href="/" />
                    <Tab label="About" value="1" href="/" />
                    <Tab label="Work" value="1" href="/" />
                    <Tab label="Skill" value="1" href="/" />
                    <Tab label="Contact" value="1" href="/" />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
