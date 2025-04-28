import { Container, Button } from "react-bootstrap";
import PortfolioNav from "./Navbar";
import image from './assets/Passport.png'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function MainScreen() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            <PortfolioNav />
            <Container className="d-flex justify-content-around align-items-center mt-5 flex-column-reverse flex-sm-row" id="Home">
                <div className="mainscreen-left">
                    <p className="role-text">
                        <Typewriter
                            options={{
                                strings: [
                                    'FULL STACK WEB DEVELOPER',
                                    'TECH ENTHUSIAST',
                                    'PROBLEM SOLVER',
                                    'CREATIVE CODER'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30
                            }}
                        />
                    </p>
                    <h1 className="mainscreen-head">Yash Jain</h1>
                    <p className="mainscreen-subhead">I am a passionate Full Stack Developer with a knack for creating responsive, dynamic web applications. With solid experience in full-stack development, UI/UX design, and problem-solving, I bring ideas to life through clean, efficient code. My portfolio showcases innovative projects that blend functionality with creativity, reflecting my commitment to quality, performance, and user-centric design.</p>
                    <Button href="https://drive.google.com/file/d/17sTkTCLaP57m2DySo8da1ns4c2nHba9-/view?usp=drive_link" target="__blank" variant="outline-light" className="me-4 rounded">Resume</Button>
                    {/* <Button href="https://drive.google.com/file/d/1N9UX6VTXqOrWjaVhhsW-4uR5Bx3Alw9B/view?usp=sharing" target="__blank" variant="outline-light">Watch Video CV</Button> */}
                </div>
                <div className={`mainscreen-img ${!imageLoaded ? 'loading' : ''}`}>
                    <img
                        src={image}
                        alt="Profile"
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(false)}
                        style={{
                            opacity: imageLoaded ? 1 : 0.8,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                    {!imageLoaded && (
                        <div className="image-placeholder">
                            Loading...
                        </div>
                    )}
                </div>
            </Container>
        </>
    )
}