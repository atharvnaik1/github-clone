import {Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ExplorePage from'./pages/ExplorePage';
import LikesPage from './pages/LikesPage';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='flex'>
    <Sidebar />
    <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1' >
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/explore'element={<ExplorePage />}/>
        <Route path='/likes'element={<LikesPage />}/>
      </Routes>
      {/* <footer>Footer </footer> */}
    </div>
    </div>

      
  ) 
  
}

export default App;
