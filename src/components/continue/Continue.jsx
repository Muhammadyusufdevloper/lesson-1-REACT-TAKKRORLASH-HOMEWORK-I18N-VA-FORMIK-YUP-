import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logoImg from "../../assets/logo.svg"
import { useTranslation } from 'react-i18next';
const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    birthDate: Yup.date().required('Required'),
    gender: Yup.string().required('Required'),
    skype: Yup.string(),
    promo: Yup.string(),
});

const initialState = {
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    skype: '',
    promo: '',
};

const Continue = ({ setSignUp }) => {
    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            setSignUp(true)
            setSubmitting(false);
        }, 2000);
    };
    const { t } = useTranslation();
    return (
        <>
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
                        validationSchema={SignupSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting, values }) => (
                            <Form className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1/2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('first-name')}</label>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="Your first name"
                                            className={`mt-1 block w-full rounded-md border outline-none ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-gray-300'} p-2`}
                                        />
                                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('last-name')}</label>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            placeholder="Your last name"
                                            className={`mt-1 block w-full rounded-md border outline-none ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-gray-300'} p-2`}
                                        />
                                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">{t('birth-date')}</label>
                                    <Field
                                        type="date"
                                        name="birthDate"
                                        id="birthDate"
                                        className={`mt-1 block w-full rounded-md border outline-none ${errors.birthDate && touched.birthDate ? 'border-red-500' : 'border-gray-300'} p-2`}
                                    />
                                    <ErrorMessage name="birthDate" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">{t('gender')}</label>
                                    <div className="flex items-center justify-between mt-2 gap-3">
                                        <div className={` w-[50%] flex items-center pl-[16px] rounded border ${values.gender === 'Female' ? 'border-[2px] border-[#01BAB3]' : 'border-[1px] border-[#D9D9D9]'}`}>
                                            <Field type="radio" name="gender" value="Female" id="female" className="mr-2" />
                                            <label htmlFor="female" className="flex-grow h-full py-[10px]">Female</label>
                                        </div>
                                        <div className={` w-[50%] flex items-center pl-[16px] rounded border ${values.gender === 'Male' ? 'border-[2px] border-[#01BAB3]' : 'border-[1px] border-[#D9D9D9]'}`}>
                                            <Field type="radio" name="gender" value="Male" id="male" className="mr-2" />
                                            <label htmlFor="male" className="flex-grow h-full py-[10px]">Male</label>
                                        </div>
                                    </div>
                                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="skype" className="block text-sm font-medium text-gray-700">{t('skype')}</label>
                                    <Field
                                        type="text"
                                        name="skype"
                                        id="skype"
                                        placeholder="Your login Skype"
                                        className="mt-1 block w-full outline-none rounded-md border border-gray-300 p-2"
                                    />
                                    <ErrorMessage name="skype" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="promo" className="block text-sm font-medium text-gray-700">{t('promo')}</label>
                                    <Field
                                        type="text"
                                        name="promo"
                                        id="promo"
                                        placeholder="Your promo"
                                        className="mt-1 block w-full outline-none rounded-md border border-gray-300 p-2"
                                    />
                                    <ErrorMessage name="promo" component="div" className="text-red-500 text-sm" />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2 px-4 bg-[#01BAB3] text-white rounded-md hover:bg-[#01bab497]"
                                >
                                    {t('continue')}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default Continue;
