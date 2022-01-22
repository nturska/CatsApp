import { Formik, Field, ErrorMessage, Form } from 'formik';
import {connect} from 'react-redux';
import {catSchema} from './catValidationSchema'
import {getBreeds} from '../../ducks/breeds/selectors';
import {useEffect} from 'react'
import { getBreedList } from '../../ducks/breeds/operations';
import { createCat } from '../../ducks/cats/operations'
import {FaCheck} from 'react-icons/fa'

function CatForm ({breeds, getBreedList, initialValues, handleSubmit, accepted}, props) {
    useEffect(()=> { if(breeds.length===0){getBreedList()}}, [getBreedList, breeds])
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={catSchema}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize={true}>
        <Form className = "Form">
            <p className="descField">
            Name: <Field id="field" name="name" />
            </p>
            <p className='error'>
            <ErrorMessage name="name"/></p>
            <p className="descField">
            Age: <Field id="field" name="age"/>
            </p>
            <p className='error'>
            <ErrorMessage name="age"/></p>
            <p className="descField">
            Hair: <Field id="field" name="hair" />
            </p>
            <p className='error'>
            <ErrorMessage name="hair"/></p>
            <p className="descField">
            Colour: <Field id="field" name="colour"/>
            </p>
            <p className='error'>
            <ErrorMessage name="colour"/></p>
            <p className="descField">
            Breed: <Field name="breed" as="select" placeholder="Select Breed">
                {breeds.map(breed => {
                return (<option key={breed._id} value={breed._id}>{breed.name}</option>)})}
            </Field>
            </p>
            <p className="descField">
            Image URL: <Field id="field" name="image"/>
            </p>
            <p className='error'>
            <ErrorMessage name="image"/></p>
            <p className="descField">
            Description: <Field id="field" name="description"/>
            </p>
            <p className='error'>
            <ErrorMessage name="description"/></p>
            <button type="submit" id='OpenSortButton'>Accept</button> {accepted && <FaCheck className="Icon"/>}
        </Form>
        </Formik>  
        </div>
    )
}

const mapStateToProps = (state) => {
    return {breeds: getBreeds(state)}
}
const mapDispatchToProps = {
    getBreedList,
    createCat
}
export default connect(mapStateToProps, mapDispatchToProps)(CatForm);