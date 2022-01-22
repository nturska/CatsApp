import CatForm from "./catForm";
import {createCat} from "../../ducks/cats/operations"
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

function CatCreate ({createCat, history}, props) {
    const handleSubmit= (values) =>{
        createCat(values)
        .then( 
        success => {history.push(`/cats`); console.log(success)})
        .catch((err) => {console.log(err)});
    }
    return (
    <CatForm handleSubmit={handleSubmit} initialValues={{name: '', hair: '', colour: '', breed: '', description: '', image: 'http://', age:''}}/> 
    )

}
const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = {
    createCat
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatCreate));