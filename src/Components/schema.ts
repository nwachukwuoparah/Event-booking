import * as yup from "yup"

export const bookEventSchema = yup
    .object({
        firstName: yup.string().required("First Name is a required field")
            .matches(
                /^[A-Za-z ]+$/,
                "Full Name should not contain any special characters"
            ),
        lastName: yup.string().required("Last Name is a required field")
            .matches(
                /^[A-Za-z ]+$/,
                "Full name should not contain any special characters"
            ),
        email: yup.string().required("Email is a required field").email("Email must be a valid email format"),
        phoneNumber: yup.string().required("Phone Number is a required field").matches(
            /^[0-9]{1,11}$/,
            "Phone Number should be a number and not longet than 11"
        )
    })
    .required()

export const Otp = yup
    .object({
        token: yup.string().required("Cannot be empty").matches(
            /^[0-9]{1,6}$/,
            "OTP should be a number and not longet than 6"
        )
    })
    .required()