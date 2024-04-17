import Home from './views/Home';
import {Profile} from './views/Profile';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Upload from './views/Upload';
import Layout from './views/Layout';
import Single from './views/Single';

const App = () => {
  return (
    <>
      <Router>
        <Layout />
        {/*}
        <h1>My App</h1>
        <nav>
          <Link to="/">Etusivu </Link>
          <Link to="/profile">Profiili </Link>
          <Link to="/upload">Upload</Link>
        </nav>
        */}

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/media/:id" element={<Single />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
