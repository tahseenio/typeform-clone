import * as yup from 'yup';

export const Q1schema = yup.object().shape({
  Q1: yup.string().required('A name is required'),
});

const Q2schema = yup.object().shape({
  Q2: yup
    .string()
    .email('Please enter a valid email')
    .required('An email is required'),
});

const Q3schema = yup.object().shape({
  Q3: yup
    .number()
    .typeError('Please enter numbers only')
    .min(1, 'Please enter a valid number')
    .required('A phone number is required'),
});

const Q4schema = yup.object().shape({
  Q4: yup.string(),
});

const Q5schema = yup.object().shape({
  Q5: yup.string().required('A response is required'),
});

const Q6schema = yup.object().shape({
  Q6: yup.string(),
});

const Q7schema = yup.object().shape({
  Q7: yup.string(),
});

const Q8schema = yup.object().shape({
  Q9: yup.string(),
});
const Q9schema = yup.object().shape({
  Q9: yup.string(),
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
  } else if (questionNumber === 5) {
    return Q5schema;
  } else if (questionNumber === 6) {
    return Q6schema;
  } else if (questionNumber === 7) {
    return Q7schema;
  } else if (questionNumber === 8) {
    return Q8schema;
  } else if (questionNumber === 9) {
    return Q9schema;
  }
};
