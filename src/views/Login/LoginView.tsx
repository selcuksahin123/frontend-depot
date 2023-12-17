import {ReactElement} from 'react';
import {Box, Grid, Typography, TextField} from '@mui/material';
import {FormikProps} from 'formik';
import {buildErrorMessageGetter, buildHasError} from './utils/formikUtils';
import {FormValues} from './types/Form';
import Button from '../../components/ui/Button/Button';

type Props = {
  readonly formik: FormikProps<FormValues>;
};

export default function LoginView({formik}: Props): ReactElement {
  const hasError = buildHasError(formik.touched, formik.errors);
  const getErrorMessage = buildErrorMessageGetter(formik.touched, formik.errors);

  return (
    <Box
      sx={{
        backgroundColor:"#151B54",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <Grid container display="flex" justifyContent="center">
        <Grid container item xs={12} p={3} display="flex" justifyContent="space-between">
          <Grid item xs={3} md={1} px={2} alignItems="center" display="flex">
          </Grid>
        </Grid>
        <Grid item xs={12} maxWidth='50vh' md={3} mt={20} display="flex" flexDirection="column" >
          <Typography variant="h1" color="#37ecf5">
            {'Log In'}
          </Typography>
          <Typography color="#949AD9" pt={1}>
            {'Please enter your user data'}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={6} display="flex" flexDirection="column">
              <TextField
                label={'Email'}
                variant="outlined"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={hasError('email')}
                helperText={getErrorMessage('email')}
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottom: '1px solid #fff'
                    }
                  }
                }}
              />
              <TextField
                type="password"
                label={'Password'}
                variant="outlined"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={hasError('password')}
                helperText={getErrorMessage('password')}
                sx={{marginY: 4}}
                InputProps={{
                  sx: {
                    '&:before': {
                      borderBottom: '1px solid #fff'
                    }
                  },
                }}
              />
            </Box>
            <Box mt={5} px={20}>
            <Button
                text={'Login'}
                type="submit"
                padding="18px"
              />
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
