import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Footer from './Components/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PlanDetails from './Components/Home/PlanDetails/PlanDetails';
import MyBooking from './Components/MyBooking/MyBooking';
import ManageBooking from './Components/ManageBooking/ManageBooking';
import AddBooking from './Components/AddBooking/AddBooking';

function App() {
  return (
    <div className="App">
      {/* Set up Route  */}
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path='/' >
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/plan/:id'>
            <PlanDetails></PlanDetails>
        </PrivateRoute>
        <PrivateRoute path='/mybooking'>
          <MyBooking></MyBooking>
        </PrivateRoute>
        <PrivateRoute path='/managebooking'>
          <ManageBooking></ManageBooking>
        </PrivateRoute>
        <PrivateRoute path='/addbooking'>
          <AddBooking></AddBooking>
        </PrivateRoute>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
