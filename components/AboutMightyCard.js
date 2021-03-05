import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Mighty Mauley
        </Typography>
        <Typography variant="body2" component="p">
        “[T]here is another America. This other America has a daily ugliness about it that constantly transforms ... hope into the fatigue of despair. In this America millions ... work-starved ... walk the streets daily in search for jobs that do not exist. In this America millions of people find themselves living in rat-infested, vermin-filled slums. In this America people are poor by the millions. They find themselves perishing on a lonely island of poverty in the midst of a vast ocean of material prosperity.”
        <br />
        "[T]here is deep down within all of us an instinct. It's a kind of drum major instinct—a desire to be out front, a desire to lead the parade, a desire to be first. And it is something that runs the whole gamut of life… [W]e all have the drum major instinct. We all want to be important, to surpass others, to achieve distinction, to lead the parade… [T]he... psychoanalyst contends that this is the dominant impulse… [T]his quest for recognition, this desire for attention, this desire for distinction is the basic impulse… [I]f you want to say that I was a drum major, say that I was a drum major for justice...so that we can make of this old world a new world."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
