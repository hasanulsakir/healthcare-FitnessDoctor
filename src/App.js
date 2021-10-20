import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import LoginWithEmail from './component/Login/Emaillogin/LoginWithEmail';
import Signup from './component/Login/Emaillogin/Signup';
import Login from './component/Login/Login';
import Notfound from './component/Notfound/Notfound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Service from './component/Service/Service';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './component/Service/ServiceDetails';
import Doctordetails from './component/Home/Doctor/Doctordetails';
import ContactUs from './component/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>  
          </Route>
          <Route exact path="/home">    
          <Home></Home>  
          </Route>
          <PrivateRoute exact path="/contactus">    
         <ContactUs></ContactUs>
          </PrivateRoute>
          <PrivateRoute exact path="/service">    
        <Service></Service> 
          </PrivateRoute>
          <PrivateRoute exact path="/servicedetails/:serviceID">    
    <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/doctordetails/:doctorID">    
    <Doctordetails></Doctordetails>
          </PrivateRoute>
          <Route exact path="/login">
       <Login></Login>
          </Route>
          <Route exact path="/loginwithemail">
       <LoginWithEmail></LoginWithEmail>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>

            </Route>
        </Switch>
          <Footer></Footer>
</Router>
      </AuthProvider>
    </div>
  );
}

export default App;
