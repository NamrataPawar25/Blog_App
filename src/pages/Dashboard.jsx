import React, { useEffect, useState } from 'react'
import useBlog from '../hook/useBlog'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Dashboard = () => {
    const [blogs, setBlogs] = useState([])
    const {getBlogs, deleteBlog} = useBlog()

    function fetchData(){
        const getBlogsLocal = getBlogs()
        setBlogs(getBlogsLocal)
    }

    useEffect(()=>{
        fetchData()
    },[])

    function handleDelete(ID){
      const mgs= deleteBlog(ID)
      if(mgs){
        toast(mgs)
      }
      else{
        toast("can't delete")
      }
      fetchData()
    }

  return (
    <div>
      <h1 className='my-3'>DASHBOARD</h1>
      <ToastContainer/>
      {blogs.length >0 ?(
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Blog Title</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map((b,i)=>(
      <tr key={i}>
      <td>{i+1}</td>
      <td><Link to={`/${b.id}`}>{b.title}</Link></td>
      <td><button className='btn btn-success me-2'>Edit</button>
        <button className='btn btn-danger' onClick={()=>handleDelete(b.id)}>Delete</button></td>
    </tr>
    ))}
    
  </tbody>
</table>
      ) : (<p>No blog yet</p>)}
    </div>
  )
}

export default Dashboard