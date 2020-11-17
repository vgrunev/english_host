import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    toolbar: {
        justifyContent: "flex-end"
    }
});

function Navigation() {
    const classes = useStyles();

    return <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Contact Us</Button>
        </Toolbar>
    </AppBar>;
}

export default Navigation;