import * as Yup from 'yup';

export const breedSchema = Yup.object().shape({
    name: Yup.string().required('*You have to provide name'),
    hair: Yup.string().required('*You have to provide description of hair length'),
    colour: Yup.string().required('*You have to provide hair colour'),
    size: Yup.string().required('*You have to provide size of a cat'),
    description: Yup.string().required('*You have to provide size of a cat'),
    lifespan_min: Yup.number('This should be a number').positive('Must be positive').required('You have to provide minimum lifespan'),
    lifespan_max: Yup.number('This should be a number').positive('Must be positive'),
    characteristics: Yup.string().required('You have to providecharacteristics')
})