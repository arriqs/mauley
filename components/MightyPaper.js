import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Image from 'next/Image'

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    minHeight: 500
  },
});

export default function MightyPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Image alt="Mighty's signature" src="/images/mighty-paper.png" title="Mighty's Signature" width={350} height={500} />
    </div>
  );
}
