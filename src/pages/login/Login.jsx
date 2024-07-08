import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logoImg from "../../assets/logo.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const initialState = {
    email: '',
    password: '',
};

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            setSubmitting(false);
            navigate("/")
        }, 2000);
    };
    const { t } = useTranslation();
    return (
        <div className="min-h-[calc(100vh-56px)] flex items-center justify-center bg-[#F4F8FA]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6 flex flex-col items-center">
                    <img src={logoImg} alt="logo" className='mb-6' />
                    <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
                    <p className="text-gray-500">
                        {t('text')}{' '}
                        <a href="#" className="text-[#01BAB3] hover:underline">{t('login')}</a>
                    </p>
                </div>
                <Formik
                    initialValues={initialState}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('email')}</label>
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
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('password')}</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className={`mt-1 block w-full rounded-md border outline-none ${errors.password && touched.password ? 'border-red-500' : 'border-gray-300'} p-2 mb-20`}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2 px-4 bg-[#01BAB3] text-white rounded-md hover:bg-[#01bab497] "
                            >
                                {t('continue')}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );

}

export default Login;
