import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('public.json')
        .then(res=>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blog:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired

}

export default Blogs;