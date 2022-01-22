import BreedForm from "./breedForm";
import {createBreed} from "../../ducks/breeds/operations"
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

function BreedCreate ({createBreed, history}, props) {
    const handleSubmit= (values) =>{
        createBreed(values)
        .then( 
        success => {history.push(`/breeds`); console.log(success)})
        .catch((err) => {console.log(err)});
    }
    return (
    <BreedForm handleSubmit={handleSubmit} 
    initialValues={{name: '', hair: '', colour: '', size: '', description: '', lifespan_min: '', lifespan_max:  '', characteristics: ''}}/> 
    )

}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {
    createBreed
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BreedCreate));