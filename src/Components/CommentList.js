import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className=''>
      <div className=''>
      <Comment data={comment} />

      </div>

      <div className='mx-6 text-gray-200   '>
        <CommentList comments={comment.replies} />
    </div>
    </div>
  ));
};

export default CommentList;
