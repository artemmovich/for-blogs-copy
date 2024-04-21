import "./blogPost.css"
const BlogPost = ({title, date, design, text}) => {
   return (
      <div className="blog-post">
       <h2 className="blog-post__title">{title}</h2>
       <p className="blog-post__about">{date} &nbsp; &nbsp;| &nbsp; &nbsp; {design}</p>
       <p>{text}</p>
       
     </div>
   )
}
 export default BlogPost;