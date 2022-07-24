import BlogCard from "./BlogCard"

const BlogCards = () =>{
    return(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        </div>
    )
}
export default BlogCards