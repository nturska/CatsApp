import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCatList } from "../ducks/cats/operations";
import { getCats } from "../ducks/cats/selectors";
import { getBreeds } from "../ducks/breeds/selectors";
import {getBreedList} from "../ducks/breeds/operations"

function Statistics ({cats, breeds, getBreedList, getCatList}, props) {
    const [ mostCats, setMostCats ] = useState([])
    const [averageAge, setAverageAGe] = useState(0.0)
    const [averageLifespan, setAverageLifespan] = useState(0.0)
    useEffect(() => {
    console.log(cats.length === 0)
    if(cats.length === 0){
        getCatList();}
    if(breeds.length === 0){
        getBreedList()
    }
    },[getCatList, cats, breeds, getBreedList]);
    useEffect(() => {
        setMostCats(breeds.map( breed => [breed.name, breed.cats.length]).sort((a, b) => b[1]-a[1]).slice(0, 3))
        setAverageAGe(cats.reduce(
            function (acc, curr) {
            return acc+parseInt(curr.age)}, 0)/(cats.length+1))
        setAverageLifespan(breeds.reduce(
            function (acc, curr) {
            return acc+parseInt(curr.lifespan_max)+parseInt(curr.lifespan_min)}, 0)/(2*breeds.length))
    }, [cats, breeds])
    return (
    <div className="Statistics">
        <p className="title">STATISTICS</p>
        <div className="Stats"><p>Breeds with the most cats: </p><div>{mostCats.map(breed => <p key={breed[0]}>breed: {breed[0]}    cats: {breed[1]}</p>)}</div></div>
        <div className="Stats"><p>Average age: </p><p>{averageAge.toFixed(2)}</p></div>
        <div className="Stats"><p>Average lifespan: </p><p>{averageLifespan}</p></div>
    </div>
    );
};
const mapStateToProps = (state) => {
  return {
     cats: getCats(state),
     breeds: getBreeds(state)
};
}
const mapDispatchToProps = {
    getCatList,
    getBreedList
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);