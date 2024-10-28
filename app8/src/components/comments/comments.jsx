import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "../register/register.css"

const CommentForm = () => {
  const validationSchema = Yup.object({
    comment: Yup.string().min(5, 'Мінімум 5 символів').required('Обов’язкове поле'),
  });

  return (
    <Formik
      initialValues={{ comment: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Коментар:', values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="comment">Коментар:</label>
            <Field name="comment" as="textarea" />
          </div>
          <ErrorMessage name="comment" component="div" className='errorValidation' />
          <button type="submit">Додати коментар</button>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
