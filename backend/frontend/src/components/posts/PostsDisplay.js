import React from 'react';

export const PostsDisplay = ({post}) => {
  if(!!post) {
    return(
      <div>
        Title: {post.title}
      </div>
    )
  } else {
    return null;
  }
}
