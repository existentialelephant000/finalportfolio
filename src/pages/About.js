import me2 from "./images/me2.png"
import './About.css'
export function About() {
    return (
        <>
        <div class="about">
            <div class="main">
                <img class="photo2" src={me2} alt="photo of me"/>
                <div class="text2">
                    <h1>in case you were wondering...</h1>
                    <br/>
                    <p>Elephants are my favorite animal. I also really enjoy the outdoors, listening to music,
                        playing guitar, and relaxing and doing nothing. I know I said on my main page that I had
                        a specal interest in machine learning and computer vision, but I don't really know anything
                        about those things (i had to say SOMETHING.) I'm a sophomore and don't really know what I 
                        want to do within CS yet, but I guess I'm just here for the ride. This course was alright, 
                        I guess. I honestly wish that they taught us how to be good web developers, instead of just
                        throwing us into the wind and making us learn by ourselves (what's the point of classes if
                        they make you learn everything by yourself?). That was defineitly the biggest struggle of the course for me. But
                        looking at this website compared to my first one (which I made using Canva) this is a huge
                        imporvement so I guess I can be proud of that. </p>
                </div>
            </div>
        </div>
        </>
    )
}