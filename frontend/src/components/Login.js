import React from 'react';
import { Avatar, Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const paperStyle = { padding: 30, height: '50vh', width: 280, margin: '20px auto' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnStyle = { margin: '8px 0' };
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validateYupSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    const storeUser = JSON.parse(localStorage.getItem('user'));
    if (storeUser && values.email === storeUser.email && values.password === storeUser.password) {
      Swal.fire({
        title: 'Login Successful!',
        text: 'You are now logged in.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        onLogin();
        navigate('/home'); // Redirect after login
      });
    } else {
      Swal.fire({
        title: 'Login Failed!',
        text: 'Please check your email and password.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>

          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateYupSchema}>
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  placeholder="Enter email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                  style={{ marginBottom: 16 }}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="password" />}
                  style={{ marginBottom: 16 }}
                />
                <FormControlLabel
                  name="remember"
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
                <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} style={btnStyle} fullWidth>
                  {props.isSubmitting ? 'Loading' : 'Sign in'}
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
        <Typography>
          Don't have an account?{' '}
          <Link href="/signup">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
