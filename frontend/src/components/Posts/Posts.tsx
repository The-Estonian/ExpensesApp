import { useEffect, useState } from 'react';
import { getPosts, deletePost } from '../connection/backend';
import Loader from '../Loader/Loader';

import styles from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    const response = await getPosts();
    const data = await response.json();

    if (!response.ok || (data.status && data.status !== 200)) {
      setError(data.message || 'Failed fetching posts');
      setShowError(true);
      setLoading(false);
      return;
    }
    console.log(data);

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id: string) => {
    deletePost(id);
    fetchPosts();
  };

  return (
    <div className={styles.postsContainer}>
      {showError && <p>{error}</p>}
      {loading && <Loader />}
      {!loading &&
        !showError &&
        posts.map((eachPost: { id: string; title: string; post: string }) => (
          <div key={eachPost.id} className={styles.post}>
            <span className={styles.post_title}>{eachPost.title}</span>
            <span className={styles.post_post}>{eachPost.post}</span>
            <div className={styles.deletePost}>
              <span onClick={() => handleDelete(eachPost.id)}>X</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
