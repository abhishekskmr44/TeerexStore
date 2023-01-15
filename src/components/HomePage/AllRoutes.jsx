import React from "react";
import NavBar from "./Navbar";

const Container = (props) => {
    return (
        <>
            <NavBar style={{postion:"fixed"}} />
            <main style={{padding:"6% 0 6% 0"}}>{props.children}</main>
        </>
    );
}
export default Container;