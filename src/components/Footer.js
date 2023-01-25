import '../styles/Footer.css'


const Footer = () => {
    return ( 
        <footer>
            
            <div className="container">
                <div className="footer_line"></div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 left_footer">
                        <div class="copyright">
                            <h6>Copyright©2022 <span>Ugo</span> | All rights reserved </h6>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right_footer">
                        <ul className="socials">
                            <li>
                                <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/linkedin.png" width= "20px;" height="20px" alt="Linkedin" /></a>
                            </li>
                            <li>
                                <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/github.png" width= "17px;" height="17px" alt="git" /></a>
                            </li>
                            <li>
                                <a href="https://wwww.linkedin.com/in/emmamuel67"><img src="/assets/behance.png" width= "25px;" height="25px" alt="behance" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}
 
export default Footer;