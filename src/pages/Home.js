import { Link } from 'react-router-dom';
import "./Home.css";
import ozone from "./images/ozone.png";
import ab from "./images/ab.png";
import responsive from "./images/responsive.png";
import search from "./images/search.png";
import { MDBRipple } from 'mdb-react-ui-kit';

export function Home() {
    return (
        <>
        <div class="home">
            <div class="welcome">
                <h1 style={{fontSize:'80px'}}>welcome</h1>
                <p class="intro"> i am a student @BrownU studying computer science, with a special interest in 
                    machine learning and computer vision</p>
            </div>
            <div class="work">
                <h1 class="myWork">my work</h1>
                <div class="projects">
                    <div class="project">
                        <Link to="/Ozone">
                            <img class="card" src={ozone} alt="iterative design card"/>
                        </Link>
                        <p class="otitle">iterative design</p>
                        <p>UX design for a startup developing a cloud-based video editing software</p>
                    </div>
                    <div class="project">
                        <Link to="/AB">
                            <img class="card" src={ab} alt="AB testing card"/>
                        </Link>
                        <p class="abtitle">eye tracking</p>
                        <p>testing different interface using eye tracking technology</p>
                    </div>
                    <div class="project">
                        <Link to="/Responsive">
                            <img class="card" src={responsive} alt="responsive design card"/>
                        </Link>
                        <p class="rtitle">responsive design</p>
                        <p>redesigning to US Passport website</p>
                    </div>
                    <div class="project">
                        <Link to="/Search">
                            <img class="card" src={search} alt="search card"/>
                        </Link>
                        <p class="stitle">search</p>
                        <p>implementing a search engine using word relevance and Google's PageRank algorithms</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}