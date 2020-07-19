import NavigationBar from '../components/navigation-bar';
import './app.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
