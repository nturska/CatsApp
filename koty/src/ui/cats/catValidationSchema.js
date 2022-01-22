import * as Yup from 'yup';

export const catSchema = Yup.object().shape({
    name: Yup.string().required('*Tell as the name of your cat'),
    hair: Yup.string().required('*You have to provide hair length'),
    colour: Yup.string().required('*You have to provide hair color'),
    description: Yup.string().required('*Please tell as more about your cat'),
    breed: Yup.string(),
    image: Yup.string().url('It is not a valid URL').required('*You have to add an image'),
    age:Yup.number('This should be a number').positive('Must be positive')
})