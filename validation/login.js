import * as Yup from "yup"

export const loginValidation = Yup.object().shape({
    emailId: Yup.string().required("Email is required!").email("Please enter valid email"),
    password: Yup.string().required("Password is required").min(8)
})

export const registerValidation = Yup.object().shape({
    emailId: Yup.string().required("Email is required!").email("Please enter valid email"),
    password: Yup.string().required("Password is required").min(8),
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string(),
})