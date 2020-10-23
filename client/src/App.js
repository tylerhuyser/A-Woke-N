import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layouts';
import Login from './screens/Login';
import Register from './screens/Register';
import { loginEmployee, registerEmployee, removeToken, verifyEmployee } from './services/auth';
import { getAllCompanies } from './services/admin-info';

import { Route, useHistory, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [companyInfo, setCompanyInfo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyEmployee();
      console.log(userData)
      setCurrentUser(userData)
    }
    const generateCompanyList = async () => {
      const companyInfo = await getAllCompanies();
      setCompanyInfo(companyInfo)
    }
    handleVerify();
    generateCompanyList()
  }, [])

  const handleLogin = async (loginData) => {
    const employeeData = await loginEmployee(loginData);
    setCurrentUser(employeeData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const employeeData = await registerEmployee(registerData);
    setCurrentUser(employeeData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <Layout 
      currentUser={currentUser}
      handleLogout={handleLogout}
    >

      <Switch>

        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path="/register">
          <Register handleRegister={handleRegister} companyInfo={companyInfo} />
        </Route>

        <Route path='/'>
          <MainContainer />
        </Route>

      </Switch>


    </Layout>

  );
}

export default App;
