import React from "react";
import Wrapper from '../../hoc/Wrapper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


export default function layout(props){
    const classes = useStyles();
    return(
    <Wrapper>
        <CssBaseline />

        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" noWrap className={classes.toolbarTitle}>
                        Beer Selector Application
                </Typography>
            </Toolbar>
        </AppBar>

        {/* Body */}
            <main className={classes.Content}>
                {props.children}
            </main>
        {/* End of Body */}

        {/* Footer */}
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {/* Footer menu will be here if needed in the future*/}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        {/* End of footer */}
    </Wrapper>
    );

};
