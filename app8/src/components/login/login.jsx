import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "../register/register.css"

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Неправильний формат email').required('Обов’язкове поле'),
    password: Yup.string().min(6, 'Мінімум 6 символів').required('Обов’язкове поле'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Авторизація:', values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
          </div>
          <ErrorMessage name="email" component="div" className='errorValidation' />

          <div>
            <label htmlFor="password">Пароль:</label>
            <Field name="password" type="password" />
          </div>
          <ErrorMessage name="password" component="div" className='errorValidation' />

          <button type="submit">Увійти</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
