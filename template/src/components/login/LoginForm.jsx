import React from 'react'
import { Link } from 'react-router-dom';

import { useFormik } from "formik";
import { httpLogin } from '../../services/http/auth.service';

import TextInput from "../../components/common/input/TextInput"
import PasswordField from "../../components/common/input/PasswordInput"

import Buttons from "../common/buttons/Button"
import { loginValidationSchema } from '../../utils/validations/authValidation';

export default function LoginForm() {
    const { handleSubmit, values, isSubmitting, errors, touched, handleChange } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: loginValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            onLogin({ formData: values, setSubmitting });
        }
    });

    const onLogin = async ({ formData, setSubmitting }) => {
        const { data, error } = await httpLogin(formData);
        if (data) { }
        else console.log(error);
        setSubmitting(false);
    }

    return (
        <form className="relative flex flex-col w-full gap-5 p-12 bg-white border  rounded-2xl" onSubmit={handleSubmit}>
            <p className="pb-5 text-xl font-bold text-center uppercase ">Welcome back Admin</p>
            <TextInput
                name="email"
                label='Email'
                disabled={false}
                errors={touched.email && errors.email}
                placeholder="Please enter your email"
                onChange={handleChange}
                value={values.email}
                type="email"
            />
            <PasswordField
                name="password"
                label='Password'
                disabled={false}
                errors={touched.password && errors.password}
                placeholder="Please enter your password"
                onChange={handleChange}
                value={values.password}
                type="password"
            />
            <Buttons title='Login' type='submit' />
            <div className='text-center'>
                <div className="flex gap-4 pb-4">
                    <div style={dividerStyle}></div>
                    <span className="font-light text-gray-400 text-md">or</span>
                    <div style={dividerStyle}></div>
                </div>
                <Link to="/" className="text-black hover:text-gray-800">
                    Forget Password?
                </Link>
            </div>
        </form>
    )
}


const dividerStyle = {
    width: "200px",
    height: "1px",
    backgroundColor: "gray",
    marginTop: "14px",
}