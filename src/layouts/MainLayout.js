import React from "react";
import Footer from "../components/Footer";
import Header from './../components/Header';

const MainLayout = props => {
    return (
        <div className="fullHeight">
            <Header {...props} >Test</Header>
            <div className="main">
                { props.children }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;