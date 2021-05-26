import React from 'react';
import { Navbar } from 'react-bootstrap/';

export default function Footer () {
    //visible on every page
    return (
        <Navbar fixed="bottom" style={{background:"#90A74C"}} variant="light" expand="lg">
            <p>meraki11 ⋈ May 2021</p>
        </Navbar>
    );
}