// import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
// import { Controller } from 'react-hook-form';


import { useLoginUser, type LoginForm as LoginFormType } from './useLogin';

function LoginForm() {
  const { mutate: loginUser } = useLoginUser();

  const formMethods = useForm<LoginSchemaType>({
    mode: 'onBlur',
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<LoginSchemaType> = useCallback(
    data => {
      const loginPayload: LoginFormType = {
        email: data.email,
        password: data.password,
      };
      loginUser(loginPayload);
    },
    [loginUser],
  );

  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, margin: 'auto' }}>
        <Typography sx={{ mb: 4 }} variant="h4">Inicio de sesión</Typography>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid spacing={2} container>
              <Grid xs={12} item>
                <Controller
                  control={formMethods.control}
                  defaultValue=""
                  name="email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="EMAIL"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} item>
                <Controller
                  control={formMethods.control}
                  defaultValue=""
                  name="password"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="CONTRASEÑA"
                      type="password"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} item>
                <Button type="submit" variant="contained" fullWidth>
                  INGRESAR
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Paper>
    </div>
  );
}

export default LoginForm;
