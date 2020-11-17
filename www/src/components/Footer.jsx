import React, {Component} from "react";

import {withStyles} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
                    </Link>{" "}
                    {new Date().getFullYear()} {"."}
                </Typography>
            </footer>
        );
    }
}

export default withStyles(styles)(Footer);
