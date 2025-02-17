import React,{useRef} from 'react'
import emailjs from 'emailjs-com'
import {HireContainer,HireWrap,HireImg, HireTitle,HireForm,InputWrap,HireInput,HireTextarea,BtnWrap} from './HireElem'
import {Button} from '../ButtonElements'
import img3 from '../../images/img-3.svg'

const Hire = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_is2kanq', 'my_cv', form.current, 'user_liSXqvj72W6kNKPb8zqcg')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });
        e.target.reset()
    };
    return (
        <>
            <HireContainer id='hireme'>
                <HireWrap>
                    <HireImg src={img3}/>
                    <HireForm ref={form} onSubmit={sendEmail}>
                        <HireTitle>Would you like to hire me?</HireTitle>
                        <InputWrap>
                            <HireInput type="text" placeholder="Name" name="name"></HireInput>
                            <HireInput type="email" placeholder="Email address" name="email"></HireInput>
                            <HireInput type="text" placeholder="Subject" name="subject"></HireInput>
                            <HireTextarea col="30" rows="8" placeholder="Your messages..." name="message"></HireTextarea>
                        </InputWrap>
                        
                        <BtnWrap>
                            <Button to="hireme" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Send Message</Button>
                        </BtnWrap>
                    </HireForm>
                </HireWrap>
            </HireContainer>
        </>
    )
}

export default Hire
