import React, { Component } from 'react';
import LinkedInLogo from '../images/icons/LinkedInLogo.png';
import persontemp from '../images/persontemp.png';
class About extends Component {
    render() {
        return <div class='container-fluid' >
                <br></br>
                <div class="container-fluid" style={{width:"85%"}} >
                    <div class="media">
                        <img class="avatar align-self-top mt-4 mr-3 z-depth-1" src={persontemp} alt="Placeholder image" height="200px" width="200px"/>
                    <div class="media-body mt-2 mb-3">
                        <div class="container-fluid z-depth-1">
                        <h1 class="mt-0 font-weight-bold">Ammar Lokhandwala</h1>
                        <h5>
                        Hi! I am a recent graduate of Drexel University with a degree in Computer Science. I am actively seeking a full-time job opportunity as a software developer. 
                        I am a hard working and ambitious person who is quick and willing to pick up new technologies and learn new skills. I am always looking to better myself at what I do and hope to use my technological skills to help make the world a better place to live in!
                        <br /><br />
                        Apart from software development, I'm very passionate about music, travelling and I enjoy reading. I also subscribe to a healthy, clean lifestyle and I am an avid bicyclist.
                        </h5>
                        <br/>
                        </div>
                        <br></br>
                        <div class="container-fluid z-depth-1">
                        <h2>Social Media Links</h2>
                        <ul style={{listStyle:"None"}}>
                            <li id="LinkedIn">
                            <a hreg="https://www.linkedin.com/in/ammarl123/" >
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            &nbsp;&nbsp;LinkedIn
                            </a>                            
                            </li>
                            <li id="GitHub">
                            <a hreg="https://github.com/ammarlokh95" > 
                            <i class="fa fa-github" aria-hidden="true"></i>
                            &nbsp;&nbsp;GitHub
                            </a>                           
                            </li>
                            <li id="Twitter">
                            <a hreg="https://twitter.com/ammarlokh" > 
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            &nbsp;&nbsp;Twitter
                            </a>                           
                            </li>
                            <li id="Angel">
                            <a hreg="https://angel.co/ammar-lokhandwala-1" > 
                            <i class="fa fa-angellist" aria-hidden="true"></i>
                            &nbsp;&nbsp;Angel List
                            </a>                           
                            </li>
                        </ul>
                        <br />
                        </div>
                        <br />
                        <div class="container-fluid z-depth-1">
                        <h2>Contact:</h2>
                        <ul style={{listStyle:"None"}}>
                        <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        &nbsp;&nbsp;
                        <a href="mailto:ammar.lokh1234@gmail.com">ammar.lokh1234@gmail.com</a> 
                        </li>
                        </ul>
                        <br></br>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    }
}

export default About;