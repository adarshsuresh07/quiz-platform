import React from 'react';
import '../../Assets/css/landing/landing.css';

import NavigationBar from './NavigationBar.js';
import SigninModal from "./SigninModal.js";
import SignupModal from "./SignupModal.js";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className='center'>
                    <center>
                        Heading
                        <br />
                        <SigninModal /> &emsp;
                        <SignupModal />
                    </center>
                    
                </div>
            </div>
        );
    }
}