import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  password: Yup.string().required('Required')
});

export default LoginFormSchema;
