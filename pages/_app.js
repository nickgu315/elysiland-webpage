import 'swiper/css';
import "swiper/css/bundle";
import 'swiper/css/pagination';
import '../styles/globals.css'
import { gsap } from 'gsap';

const ScrollTrigger = require('gsap/dist/ScrollTrigger')
gsap.registerPlugin(ScrollTrigger)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
