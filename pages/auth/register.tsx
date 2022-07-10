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

type FormData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [showError, setshowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onRegisterUser = async ({ name, email, password }: FormData) => {
    setshowError(false);
    const { hasError, message } = await registerUser(name, email, password);

    if (hasError) {
      setshowError(true);
      setErrorMessage(message!);
      setTimeout(() => {
        setshowError(false);
      }, 4000);
      return;
    }

    router.replace('/');
  };

  return (
    <AuthLayout title="Unbridled spirit | Register">
      <form onSubmit={handleSubmit(onRegisterUser)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Register
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
                label="Full name"
                variant="filled"
                fullWidth
                {...register('name', {
                  required: 'Required field',
                  minLength: {
                    value: 2,
                    message: 'Name must have minimum 2 characters',
                  },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
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
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
                type="submit"
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <NextLink href="/auth/login" passHref>
                <Link underline="always">Have an account already?</Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
