import React from 'react';
import { Navbar } from 'react-bootstrap/';

export default function Footer () {
    //visible on every page
    return (
        <Navbar fixed="bottom" bg="light" variant="light" expand="lg">
            <p>Testing text</p>
        </Navbar>
    );
}