import * as yup from 'yup';

/* eslint-disable no-unused-vars */
const Q1schema = yup.object().shape({
  Q1: yup.string().required('A name is required'),
});

const Q2schema = yup.object().shape({
  Q2: yup
    .string()
    .email('Please enter a valid email')
    .required('An email is required'),
});

const Q3schema = yup.object().shape({
  Q3: yup.string().required('A phone number is required'),
});

const Q4schema = yup.object().shape({
  Q4: yup.string().required('A response is required'),
});

export const schemaSelector = (questionNumber: number): any => {
  if (questionNumber === 1) {
    return Q1schema;
  } else if (questionNumber === 2) {
    return Q2schema;
  } else if (questionNumber === 3) {
    return Q3schema;
  } else if (questionNumber === 4) {
    return Q4schema;
  }
};
