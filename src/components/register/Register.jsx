import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import logoImg from "../../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

const initialState = {
    email: '',
    phone: '',
    country: '',
    city: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            setSubmitting(false);
            navigate("/");
        }, 2000);
    };

    return (
        <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-[#F4F8FA]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6 flex flex-col items-center">
                    <img src={logoImg} alt="logo" className='mb-6' />
                    <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
                    <p className="text-gray-500">
                        {t("text")}
                        <a href="#" className="text-[#01BAB3] hover:underline">{t("login")}</a>
                    </p>
                </div>
                <Formik
                    initialValues={initialState}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="space-y-4">
                            <>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t("email")}</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email address"
                                        className={`mt-1 block w-full rounded-md border outline-none ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'} p-2`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t("phone")}</label>
                                    <Field
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="+7 965-748-89-90"
                                        className={`mt-1 block w-full rounded-md border outline-none ${errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'} p-2`}
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">{t("country")}</label>
                                        <Field
                                            type="text"
                                            name="country"
                                            id="country"
                                            placeholder="Russia"
                                            className={`mt-1 block w-full rounded-md border outline-none ${errors.country && touched.country ? 'border-red-500' : 'border-gray-300'} p-2`}
                                        />
                                        <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">{t("city")}</label>
                                        <Field
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder="Name of the city"
                                            className={`mt-1 block w-full rounded-md border outline-none ${errors.city && touched.city ? 'border-red-500' : 'border-gray-300'} p-2`}
                                        />
                                        <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t("password")}</label>
                                    <div className="relative">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder={t("password")}
                                            className={`mt-1 block w-full rounded-md border outline-none ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} p-2`}
                                        />
                                        <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                        </span>
                                    </div>
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">{t("confirm-password")}</label>
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder={t("confirm-password")}
                                        className={`mt-1 block w-full rounded-md border outline-none ${errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : 'border-gray-300'} p-2`}
                                    />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2 px-4 bg-[#01BAB3] text-white rounded-md hover:bg-[#01bab497]"
                                >
                                    {t("Register")}
                                </button>
                            </>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
