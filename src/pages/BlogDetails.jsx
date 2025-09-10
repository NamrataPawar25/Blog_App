import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useBlog from "../hook/useBlog";

const BlogDetails = () => {
  const [b_details, setB_Details] = useState();
  const { ID } = useParams();
  const { getBlogById } = useBlog();

  function fetchData() {
    const getData = getBlogById(ID);
    setB_Details(getData);
  }

  useEffect(() => {
    fetchData();
  }, [ID]);

  return (
    <div className="container mt-5">
      {b_details ? (
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-primary text-white text-center rounded-top">
            <h2 className="mb-0">📖 Blog Details</h2>
          </div>
          <div className="card-body p-4">
            <h3 className="fw-bold text-dark">{b_details.title}</h3>
            <p className="text-muted fs-5">{b_details.description}</p>
          </div>
          <div className="card-footer text-center bg-light">
            <Link to="/" className="btn btn-outline-primary">
              ⬅ Back to Dashboard
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center my-5">
          <h2 className="text-danger">⚠️ No Such Blog Found</h2>
          <Link to="/" className="btn btn-primary mt-3">
            ⬅ Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
