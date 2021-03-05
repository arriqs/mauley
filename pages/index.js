import Head from 'next/head';
import Container from '@material-ui/core/Container';
import MightyCard from '../components/MightyCard';
import MightyDrawer from '../components/MightyDrawer';


export default function Home() {
  return (
    <Container max-width="sm">
      <div>
        <Head>
          <title>Mighty Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MightyCard />
        <MightyDrawer />
      </div>
    </Container>
  )
}
