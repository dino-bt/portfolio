//here I import the bootstrap and now I can use it in my project
//import "../styles/main.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp