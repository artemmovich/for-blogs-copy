import Facebook from "../../assets/img/fb.svg";
import Insta from "../../assets/img/insta.svg";
import Twitter from "../../assets/img/twitter.svg";
import Linkedin from "../../assets/img/Linkedin.svg"
import "./Footer.scss"
const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__wrapper">
               <div className="footer__icons">
                  <a href="?">
                     <img src={Facebook} alt="" />
                  </a>
                  <a href="/">
                     <img src={Insta} alt="" />
                  </a>
                  <a href="/">
                     <img src={Twitter} alt="" />
                  </a>
                  
                  <a href="/">
                     <img src={Linkedin} alt="" />
                  </a>
               </div>
               <p className="footer__copyright">Copyright ©2020 All rights reserved</p>
            </div>
         </div>
      </footer>
   )
}
export default Footer