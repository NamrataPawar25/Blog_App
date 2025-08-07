import React, { useState } from "react";

const UseBlog = () => {
  const [blogs, setBlogs] = useState([]);

  function saveBlogs(b) {
    localStorage.setItem("blogs", JSON.stringify(b));
  }

  function getBlogs() {
    return JSON.parse(localStorage.setItem("blogs") || []);
}

  // saveBlogs(blogs)

  function addNewBlog(data) {
    const getFromLocal = getBlogs();
    getFromLocal.push(data);
    saveBlogs(getFromLocal);
  }
  return { saveBlogs, getBlogs, blogs, addNewBlog };
};

export default UseBlog;
