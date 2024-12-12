import './App.scss';
import { PostList } from './components/PostList/PostList';
import comments from './api/comments.json';
import posts from './api/posts.json';
import users from './api/users.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Post and Comments Viewer</h1>

    <PostList listPosts={posts} listComments={comments} listUsers={users} />
  </section>
);
