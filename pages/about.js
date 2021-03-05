import Head from 'next/head';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import AboutMightyCard from '../components/AboutMightyCard';
import Container from '@material-ui/core/Container';
import Link from 'next/link';

export default function About() {
    return (
      <Container max-width='sm'>
      <div style={{paddingTop: 50 + 'px' }}>
        <Head>
          <title>About Mighty</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
        <Grid container justify='space-around' alignItems='center' >
          <Grid item>
            <Grid container max-width='sm' alignItems='center' justify='center' direction='column'>
              <Grid item>
                <Button variant="contained">Toggle View</Button>
              </Grid>
              <Grid item>
                <div style={{ width: 30 + 'vw', height: 50 + 'vh', overflowY: 'scroll' }}>
                  <AboutMightyCard />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
          <Grid justify='space-evenly' alignItems='center' direction='column' container>
          <div style={{height: 50 + 'vh', overflowY: 'scroll'}}>
            <Grid item>
              <Image width={326} height={244} src='/images/about-mighty1.PNG' />
            </Grid>
            <Grid item>
              <Image width={321} height={178} src='/images/about-mighty2.svg' />
            </Grid>
            <Grid item>
              <Image width={236} height={210} src='/images/about-mighty3.GIF' />
            </Grid>
          </div>
        </Grid>
          </Grid>
        </Grid>
        </div>
      </div>
      <Button><Link href='/' ><a>Home</a></Link></Button>
      </Container>
    )
}