import {useState} from 'react'
import React from 'react'
import PostItems from './PostItems'
import {DUMMT_POST} from '../data'



function Post() {
    const [post,setPosts] = useState(DUMMT_POST)
  return (
    <section className='posts'>
      {post.length>0?<div className='container post_container'>
      {
          post.map(({id,thumbnail,category,title,desc,authorID})=><PostItems key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
      }
      </div>:<h2 className='center'>No post found</h2>}
    </section>
  )
}

export default Post