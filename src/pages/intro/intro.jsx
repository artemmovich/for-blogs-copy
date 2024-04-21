import "../intro/intro.css"
import myImage from '../../assets/img/intro-image.png';


const Intro = () => {
   return (
      <section className="intro">
      <div className="container">
         <div className="intro__wrapper">
            <div className="intro__text">
            <h2 className="intro__title">Hi, I am John,
               <br />Creative Technologist</h2>
            <p className="intro__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            
            </div>
   
            <img src={myImage} alt="" />
         </div>
         
      </div>
      </section>
   )
}
export default Intro