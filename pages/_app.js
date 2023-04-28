import { Provider } from 'react-redux'
import dynamic from 'next/dynamic';
// import store from './business_logic/store'

import '../assets/css/vendor/bootstrap.min.css'
import '../assets/css/vendor/slick.css'
// import '../assets/css/vendor/slick-theme.css'
import '../assets/css/plugins/sal.css'
import '../assets/css/plugins/feather.css'
import '../assets/css/plugins/fontawesome.min.css'
import '../assets/css/plugins/euclid-circulara.css'
import '../assets/css/plugins/swiper.css'
import '../assets/css/plugins/magnify.css'
import '../assets/css/plugins/odometer.css'
import '../assets/css/plugins/animation.css'
import '../assets/css/plugins/bootstrap-select.min.css'
// import '../assets/css/plugins/jquery-ui.css'
import '../assets/css/plugins/magnigy-popup.min.css'
import '../assets/css/style.css'



// <!-- Modernizer JS -->
// import "../assets/js/vendor/modernizr.min.js"
// <!-- jQuery JS -->
// import "../assets/js/vendor/jquery.js"
// <!-- Bootstrap JS -->
// import "../assets/js/vendor/bootstrap.min.js"
// <!-- sal.js -->
// import "../assets/js/vendor/sal.js"
// import "../assets/js/vendor/swiper.js"
// import "../assets/js/vendor/magnify.min.js"
// import "../assets/js/vendor/jquery-appear.js"
// import "../assets/js/vendor/odometer.js"
// import "../assets/js/vendor/backtotop.js"
// import "../assets/js/vendor/isotop.js"
// import "../assets/js/vendor/imageloaded.js"

// import "../assets/js/vendor/wow.js"
// import "../assets/js/vendor/waypoint.min.js"
// import "../assets/js/vendor/easypie.js"
// import "../assets/js/vendor/text-type.js"
// import "../assets/js/vendor/jquery-one-page-nav.js"
// import "../assets/js/vendor/bootstrap-select.min.js"
// import "../assets/js/vendor/jquery-ui.js"
// import "../assets/js/vendor/magnify-popup.min.js"
// import "../assets/js/vendor/paralax-scroll.js"
// import "../assets/js/vendor/paralax.min.js"
// import "../assets/js/vendor/countdown.js"
// // <!-- Main JS -->
// import "../assets/js/main.js"







function MyApp({ Component, pageProps }) {
  return (

    // <Provider store={store}>
    <Component {...pageProps} />
    //  </Provider>

  )
}

export default MyApp
