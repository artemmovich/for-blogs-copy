import "./worksItem.css"
const WorksItem = ({ src, title, year, info }) => {
   return (
      <div className="works-item">
         <img src={src} alt="#" />
         <div className="works-item__text">
            <h2 className="works-item__title">{title}</h2>
            <div className="works-item__about">
               <p className="works-item__date">{year}</p>
               <p className="works-item__info">{info}</p>
            </div>
            <div className="works-item__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
         </div>
      </div>
   )
}
export default WorksItem