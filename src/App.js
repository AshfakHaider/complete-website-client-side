import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddServices from './Components/Dashboard/AddServices/AddServices';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import Login from './Components/Dashboard/Login/Login';
import { createContext, useState } from 'react';
import Bookings from './Components/Home/Bookings/Bookings';
import BookingList from './Components/Home/BookingList/BookingList';
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';
import AllServices from './Components/Dashboard/AllServices/AllServices';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path = '/addService'>
            <AddServices></AddServices>
        </Route>
        <Route path = '/addReview'>
          <AddReview></AddReview>
        </Route>
        <Route path='/login'>
            <Login></Login>
        </Route>
        <PrivateRoute path = '/bookings/:id'>
            <Bookings></Bookings>
        </PrivateRoute>
        <Route path='/bookingList'>
            <BookingList></BookingList>
        </Route>
        <Route path='/allServices'>
          <AllServices></AllServices>
        </Route>
        <Route path="/addAdmin">
          <AddAdmin></AddAdmin>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path = '/'>
            <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
