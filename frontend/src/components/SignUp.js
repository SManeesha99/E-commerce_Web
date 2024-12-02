import {  Avatar, Grid2, Paper, Typography,TextField,Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const paperStyle = { padding: 30, height: '50vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0' };
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    const validateYupSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Please enter valid email').required('Required'),
        password: Yup.string().required('Required')
    });

    const onSubmit = (values) => {
        localStorage.setItem('user', JSON.stringify({ email: values.email, password: values.password }));

            Swal.fire({
                title: 'Registration Successful!',
                text: 'You can now log in.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/login'); // Redirect to the login page after success
            });
    }
  return (
    <Grid2 container justifyContent="center">
        <Grid2 item xs={11} sm={8} md={6} lg={4}>
            <Paper elevation={10} style={paperStyle}>
                <Grid2 align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5' gutterBottom>
                        Sign Up
                    </Typography>
                    <Typography variant='caption' gutterBottom>
                        Please fill this form to create an account!
                    </Typography>
                </Grid2>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validateYupSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField}
                                    fullWidth
                                    label='Name'
                                    name='name'
                                    placeholder="Enter your name"
                                    required
                                    helperText={<ErrorMessage name='name'/>}
                                    style={{ marginBottom: 16 }}
                                />
                                <Field as={TextField}
                                    fullWidth
                                    label='Email'
                                    name='email'
                                    placeholder="Enter your email"
                                    required
                                    helperText={<ErrorMessage name='email'/>}
                                    style={{ marginBottom: 16 }}
                                />
                                <Field as={TextField}
                                    fullWidth
                                    label='Password'
                                    name='password'
                                    type='password'
                                    placeholder="Enter your password"
                                    required
                                    helperText={<ErrorMessage name='password'/>}
                                    style={{ marginBottom: 16 }}
                                />
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    fullWidth
                                    disabled={props.isSubmitting}
                                    style={btnStyle}
                                >
                                    {props.isSubmitting?"Loading":"Sign in"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
            </Paper>
        </Grid2>
    </Grid2>
  )
}

export default SignUp;