import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBlog from "../hook/useBlog";

const UpdateBlog = () => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const { getBlogById, getBlogs } = useBlog();

  const [form, setForm] = useState({ title: "", description: "" });

  // Load existing blog data
  useEffect(() => {
    const blog = getBlogById(ID);
    if (blog) {
      setForm({ title: blog.title, description: blog.description });
    }
  }, [ID]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle update
  const handleSubmit = (e) => {
    e.preventDefault();
    let blogs = getBlogs();

    const updatedBlogs = blogs.map((b) =>
      String(b.id) === String(ID) ? { ...b, ...form } : b
    );

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    toast.success("✅ Blog updated successfully!");

    // Delay navigation so toast is visible
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card shadow-lg border-0 rounded-3">
          <div className="card-header bg-warning text-dark text-center py-3">
            <h2 className="mb-0">✏️ Edit Blog</h2>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Update blog title"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  rows="4"
                  placeholder="Update blog description..."
                  required
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-warning px-4">
                  🔄 Update
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

export default UpdateBlog;
