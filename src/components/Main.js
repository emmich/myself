import '../styles/Main.css'
import Works from '../components/Works'

const Main = () => {
    return ( 
        <main>
            <div className="container">
                <div className="section_one">
                    <h2>Hello! &nbsp; I am</h2>
                    <h1 className="animate-character">ugo ogbonna</h1>
                    <p className="subhead mt-3">A digital and tech-focused individual, experienced in <span><i>Frontend Development and Product Designs, </i></span> 
                     building creative web/digital products and designs with accepted user experience concepts. </p>
                    <p className="moresub">I enjoy digging my hands in digital and tech projects, collaborating and getting exposed. I also work remotely as a digital strategist and product designer for a few teams and organization.</p>
                    <br /> <br />
                    <a href="#contact" class="more_button">Let's work out!</a>

                    <div className="socials">
                        <a href="https://linkedin.com/in/emmanuel67" target='_blank' rel='noreferrer'><img src="/assets/linkedin.png" width= "20px;" height="20px" alt="Linkedin" /></a>
                        <a href="https://github.com/emmich" target='_blank' rel='noreferrer'><img src="/assets/github.png" width= "17px;" height="17px" alt="Github" /></a>
                        <a href="https://www.behance.net/emmanuelogbonna" target='_blank' rel='noreferrer'><img src="/assets/behance.png" width= "25px;" height="25px" alt="Behance" /></a>

                    </div>
                </div>

                {/* <img src="/assets/person.png" width= "380px;" height="380px" alt="Linkedin"  className="person"/> */}

                <div className="section_two">
                    <div className="me" id="me">
                        <div className="row">
                            <div className="col-lg-6 about">
                                <h1>who am i?</h1>
                                <p>Hey there once again, This is Ugo. <img src="/assets/me.png" width= "25px;" height="25px" alt="me" /></p>
                                <p>I am a Software Developer practicing in frontend engineering. Skilled at bringing ideas into life and web experience interactions. Making use of world-class tools, ideas, inspirations and collaborative minds to produce great user experience.  </p>
                            </div>
                            <div className="col-lg-6"></div>
                            <br></br>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6 others">
                                <h1>more from me</h1>
                                <p>Together with my frontend engineering skills, I currently deliver sound user experience product designs in a few organizations settled in Lagos. There, I make research with the team to project company's ideas
                                    in the digital space, as well as structure and implement methods to create awareness and turn in possible clients. </p>
                                
                            </div>
                            
                        </div>
                        <div className="row and_more">
                            <div className="col-12">
                            <h1>one more thing! <img src="/assets/finger.png" width= "40px;" height="40px" alt="finger" /></h1>
                            <i>Digital Strategist . Social Media Manager . Growth Hacker . Brand Manager . Crypto/Finance Enthusiast</i>
                              <p>A Digitally Experienced individual with skills in all sections of digital marketing to be utilized in any industry, knowledged in creative tools and extensions to achieve results and boost productivity.
                                There's nothing more interesting and mind-blowing than seeing new creativity, eager to grasp knowledge with an urge to work with like-minded collaborators. It is indeed beautiful to watch your works and projects come alive  whilst solving problems and delivering opportunities to those in need of our services.
                                   <br></br><br></br>
                                <span className="animate-character2">That is how I perceive the world and the tech space. To grow and challenge. <img src="/assets/ideas.png" width= "25px;" height="25px" alt="idea" />  </span>
                             </p>

                            </div>
                        </div>
                        
                    </div>

                    
                </div>

                <hr className="divide"></hr>


                <div className="section_three">
                    <div className="works" id="works">
                        <h1>hands on</h1>
                        <div className="work_container">
                            <Works />

                        </div>

                        <a href="https://www.behance.net/emmanuelogbonna" target='_blank' rel='noreferrer' class="more mt-5">View More</a>
                        <a href="https://instagram.com/easywinigeria?igshid=YmMyMTA2M2Y=" class="more_ig mt-5" target='_blank' rel='noreferrer'>View Works on Instagram</a>
                        
                    </div>
                </div>

                <hr className="divide"></hr>


                <div className="section_four">
                    <h3 className="work_with">Worked With</h3>
                    <div className="partners" id="">
                        <ul className="primary">
                            <li><img src="/assets/umdigi.png" alt="um"></img></li>
                            <li><img src="/assets/euc.png" alt="euc"></img></li>
                            <li><img src="/assets/easylotto.png" alt="easy"></img></li>
                            <li><img src="/assets/easysport.png" alt="easy"></img></li>
                            <li><img src="/assets/wn.png" alt="wn"></img></li>
                            <li><img src="/assets/isyk.png" alt="isyk"></img></li>
                            <li><img src="/assets/oroko.png" alt="oroko"></img></li>
                            <li><img src="/assets/upgradely.png" alt="upgradely"></img></li>
                            <li><img src="/assets/zee.png" alt="zee"></img></li>
                            <li><img src="/assets/zelasa.png" alt="zelasa"></img></li>
  
                        </ul>
                        
                        <ul className="secondary">
                            <li><img src="/assets/umdigi.png" alt="um"></img></li>
                            <li><img src="/assets/euc.png" alt="euc"></img></li>
                            <li><img src="/assets/easylotto.png" alt="easy"></img></li>
                            <li><img src="/assets/easysport.png" alt="easy"></img></li>
                            <li><img src="/assets/wn.png" alt="wn"></img></li>
                            <li><img src="/assets/isyk.png" alt="isyk"></img></li>
                            <li><img src="/assets/oroko.png" alt="oroko"></img></li>
                            <li><img src="/assets/upgradely.png" alt="upgradely"></img></li>
                            <li><img src="/assets/zee.png" alt="zee"></img></li>
                            <li><img src="/assets/zelasa.png" alt="zelasa"></img></li>
                        </ul>
                        
                    </div>
                        
                        
                </div>

                <div className="section_five">
                    <div className="contact" id="contact">
                        <h1>Let's talk!</h1>
                        <p>I'm never tired to explore, try new projects, collaborate, offer my service, build your brand or just simply listen to you. <i>Just click that button</i></p><br /><br />
                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto:ugochukwu.ogbona@gmail.com?" class="mail_button" target="_blank" rel="noreferrer">Let's talk!</a>
                    </div>
                </div>
            </div>


            
        </main>
     );
}
 
export default Main;