import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full h-full">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
