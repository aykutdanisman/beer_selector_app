import React, { useState } from 'react';
import Wrapper from '../../hoc/Wrapper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import searchBeerAction from '../../store/actions/search';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ErrorMessageToast from '../../common/ErrorMessageToast'

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
}));



export default function EventSearch() {
    const classes = useStyles();
    const [searchMeal, setSearchMeal] = useState('');
    const [beers, setBeers] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleSearchButtonClick = e => {
        e.preventDefault();
        setErrorMessage(undefined);
        const fetchedBeers = searchBeerAction(searchMeal);

        fetchedBeers.then(response => {
            if (response.success) {
                setFetched(true);
                setBeers(response.data);
            } else {
                setFetched(false);
                setErrorMessage(response.errorMessage);
            }
        });
    };

    return (
        <Wrapper>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Search Beer
                    </Typography>
                    
                    <form className={classes.form} onSubmit={handleSearchButtonClick}>
                        <TextField
                            autoComplete="searchformeal"
                            name="searchMeal"
                            variant="outlined"
                            fullWidth
                            id="searchMeal"
                            label="Meal"
                            autoFocus
                            required
                            onChange={e => setSearchMeal(e.target.value)}
                        />
                        <div className={classes.heroButtons}>
                            <Grid container spacing={4} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" type="submit">
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth="md">
                
               
                {(!beers || beers.length === 0) && fetched === true && (
                    <h3>
                        No matching beer found for the meal! 
                    </h3>
                )}

                {beers.length > 0 && (
                    
                <Grid container spacing={4}>
                    {beers.map(beer => (
                        <Grid item key={beer.id} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h5">
                                        Event {beer.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" >
                                        First Brewed : {beer.first_brewed}
                                    </Typography>
                                    <Typography>
                                        {beer.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                )}

                
            </Container>
            {errorMessage && <ErrorMessageToast show message={errorMessage} />}
        </Wrapper>
    );

}