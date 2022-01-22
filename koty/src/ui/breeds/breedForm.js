import { Formik, Field, ErrorMessage, Form } from 'formik';
import {breedSchema} from './breedValidationSchema'


function BreedForm ({initialValues, handleSubmit}, props) {
    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={breedSchema}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize={true}>
        <Form className = "Form">
            <p className="descField">

                Name: <Field id="field" name="name" /></p>
            <p className='error'>
            <ErrorMessage name="name"/></p>
            <p className="descField">
            
                Hair: <Field id="field" name="hair" /></p>
            <p className='error'>
            <ErrorMessage name="hair"/></p>
            <p className="descField">
            
                Colour: <Field id="field" name="colour"/></p>
            <p className='error'>
            <ErrorMessage name="colour"/></p>
            <p className="descField">
            
                Size: <Field id="field" name="size"/></p>
            <p className='error'>
            <ErrorMessage name="size"/></p>
            <p className="descField">
            
                Description: <Field id="field" name="description"/></p>
            <p className='error'>
            <ErrorMessage name="description"/></p>
            <p className="descField">
            
                Minimal Lifespan: <Field id="field" name="lifespan_min"/></p>
            <p className='error'>
            <ErrorMessage name="lifespan_min"/></p>
            <p className="descField">
            
                Maximal Lifespan: <Field id="field" name="lifespan_max"/></p>
            <p className='error'>
            <ErrorMessage name="lifespan_max"/></p>

            <p className="descField">
                Characteristics: <Field id="field" name="characteristics"/></p>
            <p className='error'>
            <ErrorMessage name="characteristics"/></p>
            <button id="OpenSortButton" type="submit">Accept</button>
        </Form>
        </Formik>  
        </div>
    )
}

export default BreedForm;