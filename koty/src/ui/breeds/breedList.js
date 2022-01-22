import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBreedList } from "../../ducks/breeds/operations";
import { getBreeds } from "../../ducks/breeds/selectors";
import {Link} from 'react-router-dom';
import Pagination from "../pagination";
import Sort from '../sort';
import Statistics from "../statistics";

function BreedList ({breeds, getBreedList}, props) {
    const [currBreeds, setCurrBreeds] = useState([]);
    const [sortedBreeds, setSortedBreeds] = useState([])
    const [sortChanged, setSortChanged] = useState(0)
    useEffect(() => {
        if (breeds.length === 0){
        getBreedList()}
    },[getBreedList, breeds]);

    return (
        <div className="List">
            <h3>BREED LIST</h3>
            {currBreeds.map(breed => {
               return (<div className="ListItem" key={breed._id}>
                {breed.cats[0] && <img src={breed.cats[0].image} className="CatImage" alt="An example of this breed"></img>}
                <div className="Info">
                <p>Name: {breed.name}</p> <p>{breed.description}</p>
                <Link className='link' id="details" to={`/breeds/${breed._id}`}>see more about {breed.name}</Link> 
                <Link className="link" to={`breeds/cats/${breed._id}`}>See pictures {'>>>'}</Link>
                </div>
                </div>);
            })}
            <Statistics/>
            <Pagination itemList={sortedBreeds} setCurrentPagin={setCurrBreeds} changed={sortChanged}/>
            <Sort toSort={breeds} setToSort={setSortedBreeds} setChanged={setSortChanged} changed={sortChanged} numericValue="lifespan"/>
        </div>
    );
};
const mapStateToProps = (state) => {
  return {
     breeds: getBreeds(state)
};
}
const mapDispatchToProps = {
    getBreedList
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);