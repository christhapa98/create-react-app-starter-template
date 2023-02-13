import React from 'react'
import { useFormik } from "formik";
import { httpLogin } from '../../services/http/auth.service';

export default function LoginForm() {
    const { handleSubmit, values, isSubmitting, errors } = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: (values, { setSubmitting }) => {
            onLogin({ formData: values, setSubmitting });
        }
    });

    const onLogin = async ({ formData, setSubmitting }) => {
        const { data, error } = await httpLogin(formData);
        if (data) { }
        else console.log(error)
    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
    )
}
