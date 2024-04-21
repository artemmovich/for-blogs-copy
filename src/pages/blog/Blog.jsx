

import "./Blog.css"

import BlogPost from "components/blogPost/blogPost";

const Blog = () => {
   return (
      <>

         <section className="blog">
            <div className="container">

               <h2 className="blog__title">Blog</h2>
               <div className="blog__wrapper">
                  <BlogPost text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     title={"Making a design system from scratch"}
                     date={"12 Feb 2020"}
                     design={"Design, Pattern"} />
                  <BlogPost text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     title={"Making a design system from scratch"}
                     date={"12 Feb 2020"}
                     design={"Design, Pattern"} />
                  <BlogPost text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     title={"Making a design system from scratch"}
                     date={"12 Feb 2020"}
                     design={"Design, Pattern"} />
                  <BlogPost text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     title={"Making a design system from scratch"}
                     date={"12 Feb 2020"}
                     design={"Design, Pattern"} />
               </div>
            </div>
         </section>
         
      </>
   )
}
export default Blog;