import BreedForm from "./breedForm";
import { connect } from "react-redux";
import {editBreed} from "../../ducks/breeds/operations"

const BreedEdit = ({editBreed, selectedBreed, setShowDialog}, props) => {
    const handleSubmit = (values) => {
        editBreed(values)
        .then( 
            success => {setShowDialog(false); console.log(success)})
            .catch((err) => {console.log(err)});
    }
    return (<BreedForm 
        handleSubmit={handleSubmit} 
        initialValues={{_id: selectedBreed._id, name: selectedBreed.name, hair: selectedBreed.hair, colour: selectedBreed.colour, size: selectedBreed.size, description: selectedBreed.description, lifespan_min: selectedBreed.lifespan_min, lifespan_max:  selectedBreed.lifespan_max, characteristics: selectedBreed.characteristics}}/>)
}

const mapStateToProps = (state) => {
    return {};
}
const mapDispatchToProps = {
    editBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedEdit);