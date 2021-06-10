import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='container intro'>
                <h1 class='text-dark'>
                    Programming, made simple
                </h1>
            </div>

            <div className="container information text-center">
                <div className='card bg-accent'>
                    <h2>What I Teach</h2>
                    <div className='body'>
                        <p>My primary programming languages are JavaScript, HTML, CSS, and Java.
                            In addition to this, I am well versed in object oriented programming, 
                            data analysis, web development, and data structures and algorithms.
                        </p>
                    </div>
                </div>
                <div className='card bg-primary'>
                    <h2>Who I Teach</h2>
                    <div className='body text-center'>
                        <p>My students range from elementary school to college. Experience level does not matter,
                            all that matters is wanting to learn. 
                        </p>
                    </div>
                </div>
                <div className='card bg-dark'>
                    <h2>How I Teach</h2>
                   <div className='body text-center'>
                        <p>
                        All classes are done through Zoom or Teams. Younger or less experienced students will start with
                            fun, interactive coding games that introduce key concepts. More advanced students will 
                            primarily work on real-world, resume enhancing projects. This will be supplemented with 
                            practice problems.
                        </p>
                   </div>
                </div>
            </div>

            <div className="container about">
                <div className='container--small bg-light'>
                    <div className='split'>
                        <img src='Images/mary-and-robert.jpg' alt='man and woman posing in front of flowers' />
                    </div>
                    <div className='split'>
                        <h2>Meet Robert Sheffield</h2>
                        <div className='body'>
                            <p>Robert Sheffield is a 23-year-old college graduate from Orange County, California. 
                            He studied Industrial and Systems Engineering at the University of Washington, but he was always 
                            drawn to software development during his undergraduate years and spent his free time 
                            learning new programming languages and practicing coding and web development. When he's not teaching
                            programming or working on a website, Robert loves to read, cook, and play video games.
                            He currently lives in Seattle, Washington, with his girlfriend, Mary, and his cat, Ron.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container--small bg-olive'>
                    <div className='split'>
                        <h2>What makes me qualified?</h2>
                        <div className='body'>
                            <p>Robert Sheffield is a 23-year-old college graduate from Orange County, California. 
                            He studied Industrial and Systems Engineering at the University of Washington, but he was always 
                            drawn to software development during his undergraduate years and spent his free time 
                            learning new programming languages and practicing coding and web development. When he's not teaching
                            programming or working on a website, Robert loves to read, cook, and play video games.
                            He currently lives in Seattle, Washington, with his girlfriend, Mary, and his cat, Ron.</p>
                        </div>
                    </div>
                    <div className='split'>
                        <img src='Images/ron.jpg' alt='cat in front of plant' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;