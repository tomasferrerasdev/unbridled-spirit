import { ErrorOutline } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { getProviders, getSession, signIn } from 'next-auth/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/layouts';

import { GetServerSideProps } from 'next';
import { validations } from '../../utils';

const LoginPage = () => {
  const router = useRouter();

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

  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);

  const onLoginUser = async ({ email, password }: FormData) => {
    setshowError(false);
    await signIn('credentials', {
      email,
      password,
    });
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
              <Button type="submit" color="secondary" size="large" fullWidth>
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

            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              justifyContent="end"
            >
              <Divider sx={{ width: '100%', mb: 2 }} />
              {Object.values(providers).map((provider: any) => {
                if (provider.id === 'credentials')
                  return <div key="credentials"></div>;
                return (
                  <Button
                    key={provider.id}
                    variant="outlined"
                    fullWidth
                    color="primary"
                    sx={{ mb: 1 }}
                    onClick={() => signIn(provider.id)}
                  >
                    {provider.name}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });
  const { p = '/' } = query;

  if (session) {
    return {
      redirect: {
        destination: p.toString(),
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
