import "./postsCard.css"
const PostsCard = ({ title, date, design, text }) => {
   return (
     <div className="PostsCard">
      <div className="PostCard__wrapper">
       <h2 className="PostsCard__title">{title}</h2>
       <p className="PostsCard__about">{date} &nbsp; &nbsp;| &nbsp; &nbsp; {design}</p>
       <p>{text}</p>
       </div>
     </div>
   );
 }
 export default PostsCard