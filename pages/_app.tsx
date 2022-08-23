import React from "react";
import "/styles/_base.scss"

const MyApp: React.FC = ({ Component, pageProps }) => (
    <Component {...pageProps} />
);

export default MyApp;