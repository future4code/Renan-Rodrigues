import { HomePage } from '../pages/HomePage';
import { ApplicationFormPage } from '../pages/ApplicationFormPage';
import { ListTripsPage } from '../pages/ListTripsPage';
import { LoginPage } from '../pages/LoginPage';
import { AdminHomePage } from '../pages/AdminHomePage';
import { CreateTripPage } from '../pages/CreateTripPage';
import { TripDetailsPage } from '../pages/TripDetailsPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Header} from '../componentes/Header';
import styled from 'styled-components';
import GlobalStyle from "../componentes/Style"

export const Router = () =>{
  return (
    
     <BrowserRouter> 
     <Header />
     <GlobalStyle />
     <Switch>

     <Route exact path = {"/"} >
     <HomePage />
    </Route>

    <Route exact path = {"/trips/application"} >
     <ApplicationFormPage />
     </Route>

     <Route exact path = {"/trips/list"} >
     <ListTripsPage />
     </Route>

     <Route exact path = {"/login"} >
     <LoginPage />
     </Route>

     <Route exact path = {"/admin/trips/list"} >
     <AdminHomePage />
     </Route>

     <Route exact path = {"/admin/trips/create"} >
     <CreateTripPage />
     </Route>

     <Route exact path = {"/admin/trips/:id"} >
     <TripDetailsPage />
     </Route>



     </Switch>
     </BrowserRouter> 
  );
}

