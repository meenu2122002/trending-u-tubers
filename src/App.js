import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from './components/navbar';
import About from './components/about';
import Youtubers from './components/youtubers';
import Youtubercontext from './components/youtubercontext';
import Playlistpage from './components/playlistpage';
import Mostlikedvideo from './components/mostlikedvideo';
import Login from './components/login';

function App() {
 
  return (
    <>
    
    <Navbar/>
    <Youtubercontext>
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<Youtubers />} />
      <Route path="/about" element={<About />} />
      <Route path="/mostlikedvideo" element={<Mostlikedvideo />} />
      <Route path="/playlistpage" element={<Playlistpage />} />
    </Routes>
  </BrowserRouter>
  </Youtubercontext>
  </>
  );
}

export default App;
