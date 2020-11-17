import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { reasons } from './data/reasons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 400,
    minHeight: 400,
  },
}));

function Reasons() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align={'center'}>
        3 Reasons for learning from us
      </Typography>
      <Grid container className={classes.root} spacing={2} xs={12}>
        {reasons.map((r) => (
          <Grid item max>
            <Card className={classes.card}>
              <CardContent className={classes.card}>
                <Typography gutterBottom variant="h5" component="h2">
                  {r.header}
                </Typography>
                <Typography>{r.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Reasons;
