import styles from '../styles/Main.css'

const Main = () => {
    return ( 
        <main>
            <div className="container">
                <div className="section_one">
                    <h2>Hello! You are here to hire</h2>
                    <h1>ugo ogbonna</h1>
                    <p className="subhead mt-3">A digital and tech-focused individual, experienced in <span>Frontend development and product designer, </span> 
                     building creative web/digital products and designs with accepted user experience concepts. </p>
                    <p className="moresub">I enjoy digging my hands in digital and tech projects, collaborating and getting exposed. I also work remotely as a digital strategist and product designer for a few team and organization</p>
                    <br /> <br />
                    <a href="" class="more_button">Let's work out!</a>

                    <div className="socials">
                        <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/linkedin.png" width= "20px;" height="20px" alt="Linkedin" /></a>
                        <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/github.png" width= "17px;" height="17px" alt="Linkedin" /></a>
                        <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/behance.png" width= "25px;" height="25px" alt="Linkedin" /></a>

                    </div>
                </div>

                <div className="section_two">
                    <div className="me" id="me">
                        <div className="row">
                            <div className="col-lg-6 about">
                                <h1>know me</h1>
                                <p>Hey there once again, This is ugo. <img src="/assets/me.png" width= "25px;" height="25px" alt="me" /></p>
                                <p>I am a Software Developer practicing in frontend engineering. Skilled at bringing ideas into life and web experience interactions. Making use of world-class tools, ideas, inspirations and collaborative minds to produce great user experience.  </p>
                            </div>
                            <div className="col-lg-6"></div>
                            <br></br>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6 others">
                                <h1>more from me</h1>
                                <p>I am a Software Developer practicing in frontend engineering. Skilled at bringing ideas into life and web experience interactions. Making use of world-class tools, ideas, inspirations and collaborative minds to produce great user experience.  </p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>


            
        </main>
     );
}
 
export default Main;