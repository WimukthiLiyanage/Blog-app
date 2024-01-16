import React, { useState } from 'react'
import{DUMMT_POST} from '../data'
import PostItems from '../components/PostItems'

function CategoryPost() {
  const [post,setPosts] = useState(DUMMT_POST);
  return (
    <section >
    {post.length>0?<div className='container post_container'>
    {
        post.map(({id,thumbnail,category,title,desc,authorID})=><PostItems key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
    }
    </div>:<h2 className='center'>No post found</h2>}
  </section>
  )
}

export default CategoryPost