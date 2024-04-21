import "./Works.css"

import WorksItemImage1 from "../../assets/img/worksitem-image1.png"
import WorksItemImage2 from "../../assets/img/worksitem-image2.png"
import WorksItemImage3 from "../../assets/img/worksitem-image3.png"
import WorksItem from "components/worksItem/worksItem"

const Works = () => {
   return (
      <section className="works">
         <div className="container">
            <h2 className="works__title">Featured works</h2>
            <div className="works-items__wrapper">
               <WorksItem
                  src={WorksItemImage1}
                  title={'Designing Dashboards'}
                  year={'2020'}
                  info={'Dashboard'} />
               <WorksItem
                  src={WorksItemImage2}
                  title={'Vibrant Portraits of 2020'}
                  year={'2018'}
                  info={'Illustration'} />
               <WorksItem
                  src={WorksItemImage3}
                  title={'36 Days of Malayalam type'}
                  year={'2018'}
                  info={'Typography'} />
            </div>
         </div>
      </section>
   )
}
export default Works