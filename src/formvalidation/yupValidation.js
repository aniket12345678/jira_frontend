import * as Yup from 'yup'

const signin = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string().required('Enter password'),
});

const signup = Yup.object().shape({
    name: Yup.string().required('Enter name'),
    email: Yup.string().email('Invalid email').required('Enter email'),
    password: Yup.string().required('Enter password'),
});

const jobPostAdd = Yup.object().shape({
    title: Yup.string().required('Enter Title'),
    description: Yup.string().required('Enter description'),
})

export const validationObj = {
    signin,
    signup,
    jobPostAdd
}