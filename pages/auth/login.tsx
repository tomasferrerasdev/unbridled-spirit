import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/layouts';
import { AuthContext } from '../../context';
import { validations } from '../../utils';

const LoginPage = () => {
  const router = useRouter();
  const { loginUser } = useContext(AuthContext);

  type FormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showError, setshowError] = useState(false);

  const onLoginUser = async ({ email, password }: FormData) => {
    setshowError(false);

    const isValidLogin = await loginUser(email, password);

    if (!isValidLogin) {
      setshowError(true);
      setTimeout(() => {
        setshowError(false);
      }, 4000);
      return;
    }

    const destination = router.query.p?.toString() || '/';
    router.replace(destination);
  };

  return (
    <AuthLayout title="Unbridled spirit | Login">
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                LogIn
              </Typography>
              <Chip
                label="User or password incorrect"
                color="error"
                icon={<ErrorOutline />}
                className="fadeIn"
                sx={{
                  display: showError ? 'flex' : 'none',
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                variant="filled"
                fullWidth
                {...register('email', {
                  required: 'Required field',
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                {...register('password', {
                  required: 'Required field',
                  minLength: {
                    value: 6,
                    message: 'Password must have minimum 6 characters',
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Log in
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <NextLink
                href={
                  router.query.p
                    ? `/auth/register/?p=${router.query.p}`
                    : '/auth/register'
                }
                passHref
              >
                <Link underline="always">Create new account</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
