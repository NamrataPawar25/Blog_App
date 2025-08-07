import React from 'react'
import { useState } from 'react'
import useBlog from "../hook/useBlog"
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const [blogTitle, setBlogTitle] = useState()
  const [Description, setDescription] = useState()
  const { addNewBlog } = useBlog()
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault()
    const payload = {
      id: Date.now(),
      title: blogTitle,
      description: Description
    }
    addNewBlog(payload)
    toast("Blog added successfully....")
  }
  function goToDashboard(){
    navigate("/")
  }
  return (
    <>
      <div className='container'>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="blogTitle" className="form-label">
              Blog Title
            </label>
            <input
              type="text"
              className="form-control"
              id="blogTitle"
              onChange={(e) => setBlogTitle(e.target.value)}
            />

          </div>
          <div className="mb-3">
            <label htmlFor="blogDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="blogDescription"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={goToDashboard}
          >
            Go to Dashboard
          </button>
        </form>

      </div>
      <ToastContainer />
    </>
  )
}

export default AddBlog