import Head from 'next/head';
import Map from '../components/map';

const HomePage = () => {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Map />
    </div>
  );
};

export default HomePage;
