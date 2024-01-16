import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'

function PostAuthor() {
  return (
    <Link to={`/posts/users/sdfsdf`} className='post_Author'>
      <div className='post_author-avatar'>
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className='post_author-details'>
        <h5>By: Wimukthi Liyanage</h5>
        <small>Just now</small>
      </div>
    </Link>
  )
}

export default PostAuthor