import BlogCard from "./BlogCard"

const BlogCards = ({blogs}) => {
    return(
        <div className="blogcards">
            {blogs && (blogs.map((blog,index) => (
                <BlogCard key={index} blog={blog} />
            )))}
        </div>
    )
}
export default BlogCards