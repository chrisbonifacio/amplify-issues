import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify, DataStore, Logger } from "aws-amplify";
import { Post } from "./models";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const initialPost = {
  title: "",
};

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(initialPost);

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const savePost = async (e) => {
    e.preventDefault();
    try {
      await DataStore.save(new Post(newPost));
      await fetchPosts();
      setNewPost(initialPost);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await DataStore.query(Post);
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <form onSubmit={savePost}>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </main>
    </div>
  );
}

export default App;
