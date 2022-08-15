import { Navigate, Route } from 'react-router-dom';
import {  Routes } from 'react-router-dom';
import './App.css';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import { NavBar } from './shared';
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Navigate to="/home"/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='create-post' element={<CreatePost/>}/>
      <Route path='update-post/:id' element={<CreatePost/>}/>
    </Routes>
    
    </QueryClientProvider>
    </div>
  
  );
}

export default App;
