import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './Pages/Shared/TopBar';
import ProductDetail from './Pages/Home/ProductDetail';
import ReviewForm from './Pages/Home/ReviewForm';
import AllReviews from './Pages/AllReviews/AllReviews';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productDetail/:id' element={<ProductDetail/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/additem' element={<ReviewForm/>}/>
          <Route path='/allreviews' element={<AllReviews/>}/>
      </Routes>
    </div>
  );
}

export default App;
