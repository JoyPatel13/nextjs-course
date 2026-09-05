const Blog = async ({params}) =>{
    const {blogID} = await params;
    if(blogID%2 === 0) {
        console.log(object)
    }

    return(
        <>
            <div>
                <h1>Welcome to our blog {blogID} </h1>
                <p>This is blog {blogID} page .</p>
            </div>
        </>
    )
}
export default Blog;