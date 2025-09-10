import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useBlog from "../hook/useBlog";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const { getBlogs, deleteBlog } = useBlog();

  function fetchData() {
    const getBlogsLocal = getBlogs();
    setBlogs(getBlogsLocal);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleDelete(ID) {
    const msg = deleteBlog(ID);
    if (msg) {
      toast.success("🗑️ " + msg);
    } else {
      toast.error("❌ Can't delete blog");
    }
    fetchData();
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-header bg-primary text-white text-center py-3">
          <h2 className="mb-0">📚 Blog Dashboard</h2>
        </div>
        <div className="card-body p-4">
          {blogs.length > 0 ? (
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Blog Title</th>
                  <th scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((b, i) => (
                  <tr key={i}>
                    <td className="fw-semibold">{i + 1}</td>
                    <td>
                      <Link to={`/${b.id}`} className="text-decoration-none fw-bold">
                        📝 {b.title}
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link
                        to={`/update/${b.id}`}
                        className="btn btn-sm btn-warning me-2"
                      >
                        ✏️ Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(b.id)}
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-muted text-center my-3">No blogs yet. 🚀</p>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Dashboard;
