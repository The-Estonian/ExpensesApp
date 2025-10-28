import { useEffect, useState } from 'react';
import { getPosts } from '../connection/backend';
import Loader from '../Loader/Loader';

import styles from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
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
    fetchPosts();
  }, []);
  return (
    <div className={styles.postsContainer}>
      {showError && <p>{error}</p>}
      {loading && <Loader />}
      {!loading &&
        !showError &&
        posts.map((eachPost: { title: string; post: string }) => (
          <div className={styles.post}>
            <span className={styles.post_title}>{eachPost.title}</span>
            <span className={styles.post_post}>{eachPost.post}</span>
          </div>
        ))}
    </div>
  );
};

export default Posts;
