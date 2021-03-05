import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MightyModal from './MightyModal';

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



export default function MightyDrawer() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={6} justify='space-around' alignItems='center'>
        <Grid item>
          <MightyModal  />
        </Grid>
      </Grid>
    </>
  );
}
