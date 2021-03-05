import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import MightyPaper from '../components/MightyPaper'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mightyPaper: {
  }
});


export default function MightyCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid container spacing={6} justify={'space-around'}>
        <Grid item>
        <MightyPaper className={classes.mightyPaper} />
        </Grid>
        <Grid item>
          <Image alt="Main image - of Mighty" src="/images/mighty-main.svg" title="Mighty Main" width={330} height={530} />
        </Grid>
        <Grid item>
          <div style={{ paddingTop: 80 }} >
          <Image alt="Heart" src="/images/heart.svg" title="Heart" width={230} height={350} />
          </div>
        </Grid>
      </Grid>
      </CardContent>
    </Card>
  );
}
