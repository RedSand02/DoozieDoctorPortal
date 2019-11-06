import * as React from 'react';
import { IProps, IState } from '../scripts/common/base';
import { CircularProgress, Container, CssBaseline, makeStyles, useTheme } from '@material-ui/core';
import Cards from './Cards';
import { getDashboardCardDetails } from '../utils/getDashboardCardDetails';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        alignItems: 'center'
    }
}));

export default function Dashboard() {
    const theme = useTheme();
    const classes = useStyles(theme);
    let cardsToDisplay = getDashboardCardDetails();

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <Cards cards={cardsToDisplay} />
            </div>
        </Container>
    );
}