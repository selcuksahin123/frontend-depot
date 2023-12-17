import ApiPostData from '../../../interfaces/ApiPostData';
import {FormValues} from '../types/Form';

export const initialValues: FormValues = {
  email: '',
  password: ''
};

export const mapFormValuesToApiFormat = (values: FormValues): ApiPostData => ({
  email: values.email,
  password: values.password
});
