import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CustomTextInput = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default CustomTextInput;
