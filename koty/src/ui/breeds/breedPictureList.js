import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCatList } from "../../ducks/cats/operations";
import { getCatsOfBreed } from "../../ducks/cats/selectors";
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import Pagination from "../pagination";
import Sort from "../sort";
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom';

function BreedPictureList ({cats, getCatList}, props) {
    const [currCats, setCurrCats] = useState([]);
    const [sortedCats, setSortedCats] = useState([])
    const [sortChanged, setSortChanged] = useState(0)
    const history =useHistory()
    useEffect(() => {
        console.log(cats.length === 0)
        if(cats.length === 0){
            getCatList();}
        },[getCatList, cats]);
    return (
        <div className="List">
            <button onClick={() => {history.goBack()}} className="Goback"><IoChevronBackCircleOutline className="Icon"/></button>
            <h3>PICKED BREED LIST</h3>
            {(!cats.length) &&
                <div className="ListItem">
                <h2>There are no cats of that breed on our page yet!</h2>
                <Link className="link" to='/cats/form'>{'>'}Click here to add a cat {'<'}</Link>
                </div>}
            
            {currCats.map(cat => {
               return (<div className="ListItem" key={cat._id}>
                <img className="CatImage" src={cat.image} alt="sweet cat"/> 
               <div className="Info"><p>{cat.name}</p> <p>{cat.breed.name}</p> <p>{cat.description}</p></div> 
               </div>);
            })}
            <Pagination itemList={sortedCats} setCurrentPagin={setCurrCats} changed={sortChanged}/>
            <Sort toSort={cats} setToSort={setSortedCats} setChanged={setSortChanged} changed={sortChanged} numericValue="age"/>
            
        </div>
    );
};
const mapStateToProps = (state, props) => {
  return {
    cats: getCatsOfBreed(state, props.match.params.id)
};
}
const mapDispatchToProps = {
    getCatList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreedPictureList));