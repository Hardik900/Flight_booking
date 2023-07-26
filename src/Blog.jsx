import React from "react";
import Blog_card from "./Blog_card";

function Blog(){
    return(
        <>
            <div className="Blog-main">
                <h3 className="text-center">Blog Lists</h3>
                <h2 className="text-center">Latest Blogs</h2>
                <div className="Blog row m-0 col-md-12 bg-danger">
                    <Blog_card />
                    <Blog_card />
                    <Blog_card />
                </div>
                <button className="btn btn-lg btn-info jj">See More</button>
            </div>
        </>
    )
}

export default Blog;