import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomTextInput from '../../modules/customTextInput';

import "./register.css"


const RegistrationForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string().min(3, 'Мінімум 3 символи').required('Обов’язкове поле!'),
        lastName: Yup.string().max(10, 'Максимум 10 символів').required('Обов’язкове поле!'),
        email: Yup.string().email('Неправильний формат email').required('Обов’язкове поле!'),
        password: Yup.string()
            .matches(/[A-Z]/, 'Пароль має містити хоча б одну велику літеру')
            .matches(/[^a-zA-Z0-9]/, 'Пароль має містити хоча б один спеціальний символ')
            .required('Обов’язкове поле!'),
    });

  return (
    <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log('Реєстрація:', values);
    }}
    >
      {() => (
        <Form>
            <Field name="firstName" label="Ім’я" component={CustomTextInput} className="formInput" />
                <ErrorMessage name="firstName" component="div" className='errorValidation' />
            <Field name="lastName" label="Прізвище" component={CustomTextInput} className='formInput' />
                <ErrorMessage name="lastName" component="div" className='errorValidation' />
            <Field name="email" label="Email" component={CustomTextInput} className='formInput' />
                <ErrorMessage name="email" component="div" className='errorValidation' />
            <Field name="password" label="Пароль" type="password" component={CustomTextInput} className='formInput' />
                <ErrorMessage name="password" component="div" className='errorValidation' />
            <button type="submit">Зареєструватись</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
