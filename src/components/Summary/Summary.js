import React,{useState} from 'react'
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1, HeroP,Description} from './SummaryElem'
import Video from '../../videos/video.mp4'

const Hero = () => {
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                
                <HeroP>Hi, I'm Estelle, I graduated from the University of Canterbury in Computer Science, have excellent skills with programming languages like JavaScript(ES6), HTML5, CSS3 and understand Azure, CI/CD, Agile etc.
                    <br />
                    <br />
                    As a hard-working Supervisor, Manager and Consultant, have 3.5+ years customer services and training work experience. I am a fast learner, pay great attention to details, patient and like to overcome difficult challenges.
                    <br />
                    <br />
                </HeroP>
                <Description>
                    * This website developed with Azure Static Web App,Github,ReactJs * <br />
                    <a href="https://github.com/Meihong117/cv" style={{color:'#638bf7'}} target='_blank'>See the code</a>
                </Description>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
