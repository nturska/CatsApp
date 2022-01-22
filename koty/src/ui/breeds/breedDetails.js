import { connect } from 'react-redux';
import {getBreedById} from '../../ducks/breeds/selectors';
import BreedEdit from './breedEdit';
import {useState, useEffect} from 'react';
import Dialog from '../dialog';
import { useHistory } from 'react-router-dom';
import { FaTrashAlt, FaEdit, FaTimes} from 'react-icons/fa';
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import {withRouter} from 'react-router'
import {deleteBreed, getBreedList} from '../../ducks/breeds/operations';

function BreedDetails({breed, getBreedList, deleteBreed, deleteBreedAction}, props){
    const [showDialog, setShowDialog] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const history=useHistory()
    useEffect(() => {
        if (breed === undefined){
        getBreedList()}
    },[getBreedList, breed]);
    const handleDelete = (breed) => {
        deleteBreed(breed).then(success => {history.goBack(); console.log(success)})
        .catch(err => console.log(err))
    }
    return (
        <div className="List">
            DETAILS
            <button onClick={() => {history.goBack()}} className="Goback"><IoChevronBackCircleOutline className="Icon"/></button>
            <div className='ListItem'>
            <div className='InfoNoPic'>
            <p>Name: {breed.name}</p>
            <p>Hair: {breed.hair}</p>
            <p>Colour: {breed.colour}</p>
            <p>Size: {breed.size}</p>
            <p>Characteristics: {breed.characteristics}</p>
            <p>Lifespan: from {breed.lifespan_min} to {breed.lifespan_max}</p>
            <div className='DetailButtons'>
            <button className="InvisibleButton" onClick={() => setShowEdit(true)}><FaEdit className='Icon'/></button>
            <button className="InvisibleButton" onClick={() => setShowDialog(true)}><FaTrashAlt className='Icon'/></button></div>
            {showDialog &&
            <Dialog action='delete' ToDelete={breed._id} handleConfirm={handleDelete} setShowDialog={setShowDialog}/>
            }
            {showEdit &&
            <div className="PopUpBackground">
            <div className='EditWindow'>
            <button className="InvisibleButton" onClick={() => setShowEdit(false)}><FaTimes className='Icon'/></button>
            <BreedEdit selectedBreed={breed} setShowDialog={setShowEdit}/>
            </div>
            </div>
            }
        </div>
        </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    breed: getBreedById(state, props.match.params.id)
});

const mapDispatchToProps = {
    deleteBreed,
    getBreedList
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreedDetails));