import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useBlog from "../hook/UseBlog";

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addNewBlog } = useBlog();
  const navigate = useNavigate();

  function handleSubmit(event) {
  event.preventDefault();
  if (!blogTitle || !description) {
    toast.error("Please fill in all fields");
    return;
  }

  const payload = {
    id: Date.now(),
    title: blogTitle,
    description: description,
  };
  addNewBlog(payload);
  toast.success("🎉 Blog added successfully!");

  setBlogTitle("");
  setDescription("");

  // navigate only after toast shows
  setTimeout(() => {
    navigate("/");
  }, 1500);
}


return (
  <>
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-header bg-primary text-white text-center py-3">
          <h2 className="mb-0">📝 Add New Blog</h2>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label fw-semibold">
                Blog Title
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="blogTitle"
                value={blogTitle}
                placeholder="Enter blog title"
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="blogDescription"
                className="form-label fw-semibold"
              >
                Description
              </label>
              <textarea
                className="form-control form-control-lg"
                id="blogDescription"
                rows="4"
                value={description}
                placeholder="Write your blog description..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success px-4">
                ✅ Submit
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
    <ToastContainer position="top-right" autoClose={2000} />
  </>
);
};

export default AddBlog;
