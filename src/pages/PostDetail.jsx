import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog21.jpg'

function PostDetail() {
  return (
    <section className='post-detail'>
      <div className='container post-detail_container'>
        <div className='post-detail_header'>
          <PostAuthor/>
          <div className='post-detail_buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delite`} className='btn sm primary'>Delete</Link>
          </div>
        </div>
        <h1>This is the Title!</h1>
        <div className='post-detail_thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborumLorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit suscipit cupiditate, beatae cumque nostrum consequuntur sed fuga repellendus, veniam recusandae facilis in. Facilis aspernatur dolores voluptatibus natus eveniet tempore odio non eos sint! Soluta totam delectus enim est laborum.</p>
      </div>

    </section>
  )
}

export default PostDetail