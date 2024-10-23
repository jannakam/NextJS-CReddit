import React from 'react'
import PostCards from './PostCards'

function PostsList({ posts }) {
    const postList = posts.map((post) => {
        <PostCards post={post} key={post.id} />
    })
  return (
    <div>
        {postList}
    </div>
  )
}

export default PostsList
