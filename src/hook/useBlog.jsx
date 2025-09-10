import React, { useEffect, useState } from "react";

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const firstTimeFromLocal= JSON.parse(localStorage.getItem("blogs")) || []
    console.log(firstTimeFromLocal);
    setBlogs(firstTimeFromLocal)
  },[])

  function saveBlogs(b) {
    localStorage.setItem("blogs", JSON.stringify(b));
  }

  function getBlogs() {
    return JSON.parse(localStorage.getItem("blogs"));
}

  // saveBlogs(blogs)

  function addNewBlog(data) {
    const getFromLocal = getBlogs();
    getFromLocal.push(data);
    saveBlogs(getFromLocal);
  }
  function getBlogById(ID){
    const getFromLocal= getBlogs()
    return getFromLocal.find((b,i)=>String(b.id) === String(ID))
  }
  
  function deleteBlog(ID){
    const getFromLocal = getBlogs()
    const blogListAfterDelete= getFromLocal.filter((b,i)=>b.id!==ID)
    saveBlogs(blogListAfterDelete)
    return "delete successfully"
  }
  return { saveBlogs, getBlogs, blogs, addNewBlog, getBlogById, deleteBlog };
};

export default useBlog;
