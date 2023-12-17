import {ReactElement, Suspense} from 'react';
import {useFormik} from 'formik';
import {useAuthContext} from '../../contexts/AuthContext/AuthContext';
import LoginFormSchema from './LoginFormSchema';
import LoginView from './LoginView';
import {FormValues} from './types/Form';
import {initialValues} from './utils/form';


export default function Login(): ReactElement {
  const {login} = useAuthContext();

  const formik = useFormik({
    initialValues,
    validationSchema: LoginFormSchema,
    onSubmit: (values: FormValues) => login(values)
  });

  return (
    <Suspense fallback="Cargando...">
      <LoginView formik={formik} />
    </Suspense>
  );
}
