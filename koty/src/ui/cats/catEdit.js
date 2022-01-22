import CatForm from "./catForm";
import { connect } from "react-redux";
import {editCat} from "../../ducks/cats/operations";

function CatEdit ({selectedCat, setShowDialog, editCat}, props) {
    const handleSubmit = (values) => {
        editCat(values)
        .then( 
            success => {setShowDialog(false); console.log(success)})
            .catch((err) => {console.log(err)});
        
    }
    return (<CatForm 
        handleSubmit={handleSubmit} 
        initialValues={{_id: selectedCat._id, name: selectedCat.name, age:selectedCat.age, hair: selectedCat.hair, colour: selectedCat.colour, breed: selectedCat.breed._id, image: selectedCat.image, description: selectedCat.description}} />)
}

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = {
    editCat
}

export default connect(mapStateToProps, mapDispatchToProps)(CatEdit);