import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCatById} from '../../ducks/cats/selectors';
import { FaTrashAlt, FaEdit, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import Dialog from '../dialog';
import CatEdit from './catEdit';
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom';
import {deleteCat} from '../../ducks/cats/operations';
import {Link} from 'react-router-dom'

function CatDetails({cat, deleteCat}, props){
    const [showDialog, setShowDialog] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const history=useHistory()
    const handleDelete = (cat) => {
        deleteCat(cat).then(success => {history.goBack(); console.log(success)})
        .catch(err => console.log(err))
    }
    return (
        <div className='List'>
        <p>DETAILS</p>
        <button onClick={() => {history.goBack()}} className="Goback"><IoChevronBackCircleOutline className="Icon"/></button>
        <div className="ListItem">
            <img className="CatImage" src={cat.image} alt="cat here"/>
            <div className='Info'>
            <p>Name: {cat.name}</p>
            <p>Breed: <Link className="link" to={`breeds/${cat.breed._id}`}>{cat.breed.name}</Link></p>
            <p>Age: {cat.age}</p>
            <p>Hair length: {cat.hair}</p>
            <p>Colour: {cat.colour}</p>
            <p id="description">{cat.description}</p>
            
            <div className='DetailButtons'>
            <button className="InvisibleButton" onClick={() => setShowEdit(true)}><FaEdit className='Icon'/></button>
            <button className="InvisibleButton" onClick={() => setShowDialog(true)}><FaTrashAlt className='Icon'/></button>
            </div>
            {showDialog &&
            <Dialog action='delete' ToDelete={cat._id} handleConfirm={handleDelete} setShowDialog={setShowDialog}/>
            }
            {showEdit &&
            <div className="PopUpBackground">
            <div className='EditWindow'>
            <button className="InvisibleButton" onClick={() => setShowEdit(false)}><FaTimes className='Icon'/></button>
            <CatEdit selectedCat={cat} setShowDialog={setShowEdit}/>
            </div>
            </div>
            }
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    cat: getCatById(state, props.match.params.id)
});

const mapDispatchToProps = {
    deleteCat
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatDetails));