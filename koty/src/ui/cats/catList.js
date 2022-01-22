import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCatList } from "../../ducks/cats/operations";
import { getCats } from "../../ducks/cats/selectors";
import { Link } from 'react-router-dom';
import Pagination from "../pagination";
import Sort from "../sort"

function CatList ({cats, getCatList}, props) {
    const [currCats, setCurrCats] = useState([]);
    const [sortedCats, setSortedCats] = useState([])
    const [sortChanged, setSortChanged] = useState(0)
    useEffect(() => {
    console.log(cats.length === 0)
    if(cats.length === 0){
        getCatList();}
    },[getCatList, cats]);
    return (
        <div className="List">
            <h3>CAT LIST</h3>
            { currCats.map(cat => {
               return (<div className="ListItem" key={cat._id}>
               <img className="CatImage" src={cat.image} alt="sweet cat"/>
               <div className="Info">
                <p>Name: {cat.name}</p><p>Age: {cat.age}</p> 
                <p>Breed: <Link className="link" to={`breeds/${cat.breed._id}`}>{cat.breed.name}</Link></p><p>{cat.description}</p> 
               <Link className='link' id="details" to={`/cats/${cat._id}`}>see more about {cat.name}</Link></div> 
               </div>);
            })}
            <Pagination itemList={sortedCats} setCurrentPagin={setCurrCats} changed={sortChanged}/>
            <Sort toSort={cats} setToSort={setSortedCats} setChanged={setSortChanged} changed={sortChanged} numericValue="age"/>
        </div>
    );
};
const mapStateToProps = (state) => {
  return {
     cats: getCats(state),
};
}
const mapDispatchToProps = {
    getCatList
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList);