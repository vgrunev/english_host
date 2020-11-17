import React from "react";
import Navigation from "./Navigation";
import Reasons from "./Reasons";
import Footer from "./Footer";
import 'fontsource-roboto';

export default function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <Reasons/>
            <Footer/>
        </React.Fragment>
    );
}
