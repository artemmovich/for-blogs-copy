import PostsCard from "components/PostsCard";
import "./index.scss"
import { NavLink } from "react-router-dom";

const Posts = () => {
   return (
      <section className="posts">
         <div className="container">
            <div className="posts-top__wrapper">
               <h3 className="posts__title">Recent posts</h3>
               <span className="posts__link"><NavLink className={({ isActive }) =>
                  isActive ? "active" : ""
               } to="/blog">View All</NavLink></span>
            </div>
            <div className="posts-bottom__wrapper">
               <PostsCard
                  text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                  title={"Making a design system from scratch"}
                  date={"12 Feb 2020"}
                  design={"Express, Handlebars"} />
               <PostsCard
                  text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                  title={"Creating pixel perfect icons in Figma"}
                  date={"12 Feb 2020"}
                  design={"Figma, Icon Design"} />
            </div>
         </div>
      </section>
   )
}
export default Posts