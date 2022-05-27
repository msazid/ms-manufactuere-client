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
import AllReviews from './Pages/AllReviews/AllReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import RequireAuth from './Pages/Login/RequireAuth';
import AllUsers from './Pages/Dashboard/AllUsers';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder';

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
          <Route path='/allreviews' element={<AllReviews/>}/>

          <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
            <Route path='myorders' element={<MyOrders/>}></Route>
            <Route path='addreview' element={<AddReview/>}></Route>
            <Route index element={<MyProfile/>}></Route>
            <Route path='payment/:id' element={<Payment/>}></Route>
            <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
            <Route path='manageAllOrders' element={<RequireAdmin><ManageAllOrder/></RequireAdmin>}></Route>
          </Route>

          
      </Routes>
    </div>
  );
}

export default App;
