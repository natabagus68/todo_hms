import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState('');
  const getDataPost = async () => {
    const dataPost = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const arr = dataPost.data;
    const cari = arr.filter((e) => e.userId == id);
    setPost(cari);
  };
  useEffect(() => {
    getDataPost();
  }, []);

  console.log(post);

  if (post !== '') {
    return (
      <div>
        {
              post.map((e) => (
                <div key={e.id}>
                  <p>
                    {' '}
                    title:
                    {e.title}
                  </p>
                  <p>
                    {' '}
                    body:
                    {e.body}
                  </p>
                  <p>
                    Id:
                    {e.id}
                  </p>
                </div>
              ))
          }
      </div>
    );
  }
  return false;
}

export default Post;
