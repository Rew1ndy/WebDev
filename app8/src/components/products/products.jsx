import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProductForm = () => {
  const validationSchema = Yup.object({
    productName: Yup.string().min(3, 'Мінімум 3 символи').required('Обов’язкове поле'),
    price: Yup.number().min(1, 'Ціна має бути більше 0').required('Обов’язкове поле'),
  });

  return (
    <Formik
      initialValues={{ productName: '', price: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Доданий товар:', values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="productName">Назва товару:</label>
            <Field name="productName" type="text" />
          </div>
          <ErrorMessage name="productName" component="div" className='errorValidation' />

          <div>
            <label htmlFor="price">Ціна:</label>
            <Field name="price" type="number" />
          </div>
          <ErrorMessage name="price" component="div" className='errorValidation' />

          <button type="submit">Додати товар</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
