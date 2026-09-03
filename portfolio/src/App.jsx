import './App.css';
import { HashRouter as Router, Routes,  Route} from 'react-router-dom'
import { AboutMe } from './pages/AboutMe';
import { Layout } from './Layout';
import { Home } from './pages/Home';

function App() {
 return(
  <Router>
    <Routes>
      {/* <Route element={<Layout/>}> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
      {/* </Route> */}
    </Routes>
  </Router>
 )
}

export default App;
