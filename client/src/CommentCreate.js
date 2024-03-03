import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group' style={{ marginBottom: '10px' }}>
          <label>Create comment</label>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <button className='form-control btn btn-primary'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CommentCreate;
