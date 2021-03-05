import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Image from 'next/Image';
import MightyCarousel from './MightyCarousel';
import Grid from '@material-ui/core/Grid';
import data from './data';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



export default function MightyModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
      setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    <Grid container justify='space-around' spacing={8} alignItems='center' >
    {data.map((box, index) => (
      <div>
        <Grid item>
          <div key={ box.label } style={{ paddingTop: 40, paddingBottom: 40 }} onClick={ ( ( box.id == 3 ) ? handleOpen : null ) } >
            <Link href={box.linkPath}  >
              <a><Image width={ 300 } height={ 600 } src={ box.imgPath } alt={ box.label } /></a>
            </Link>
          </div>
        </Grid>
    </div>
    ))}
    </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <MightyCarousel />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
