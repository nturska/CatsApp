import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CatList from './ui/cats/catList'
import Navbar from './ui/navbar/navbar'
import CatCreate from './ui/cats/catCreate'
import CatDetails from './ui/cats/catDetails'
import BreedDetails from './ui/breeds/breedDetails'
import BreedCreate from './ui/breeds/breedCreate'
import './App.css'
import BreedList from './ui/breeds/breedList';
import BreedPictureList from './ui/breeds/breedPictureList';
import SideBar  from './ui/sidebar/sidebar';
import {useState} from 'react';

function App() {
  const [isOpen, setIsOpen]= useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
<Router>
    <SideBar isopen={isOpen} toggle={toggle}/> 
    <Navbar isopen={isOpen} toggle={toggle}/>
    <Switch>
    <Route exact path="/"><CatList/></Route>
    <Route exact path="/cats"><CatList/></Route>
    <Route exact path="/cats/form"><CatCreate/></Route>
    <Route exact path="/breeds/cats/:id"><BreedPictureList/></Route>
    <Route exact path="/cats/:id"><CatDetails/></Route>
    <Route exact path="/breeds"><BreedList/></Route>
    <Route exact path="/breeds/form"><BreedCreate/></Route>
    <Route exact path="/breeds/:id"><BreedDetails/></Route>
    </Switch>
</Router>
  );
}

export default App;