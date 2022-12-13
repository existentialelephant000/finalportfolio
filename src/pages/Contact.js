import './Contact.css';
import contact from './images/contact.png';

export function Contact() {
    return (
        <>
        <div class="contact">
            <div class="contactMain">
                <h1>Reach out to me!</h1>
                <br/>
                <p>thank you for taking the time to peruse my page! If you have any questions, comments, concerns,
                    email me at existentialelephant@brown.edu (don't actually that email address doesn't exist)
                </p>
                <br/>
                <img src={contact} style={{width:'80vw'}}></img>
                <br/>
                <br/>
            </div>
        </div>
        </>
        
    )
}