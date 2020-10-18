import React from 'react';
import Container from '@material-ui/core/Container';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, LinearProgress } from '@material-ui/core';

import { logIn } from '../../store/auth/auth.actions';
import { getAuth } from '../../store/auth/auth.selectors';
import { Credentials } from '../../store/auth/auth.interface';

import './login.scss';

function LogIn() {
    const dispatch = useDispatch();
    const { isSubmitting, error } = useSelector(getAuth, shallowEqual);

    return (
        <main className="main">
            <Container>
                {error && <p className="error">{error.message}</p>}

                <Formik
                    initialValues={{
                        email: 'user@ozitag.com',
                        password: 'user',
                    }}
                    validate={(values) => {
                        const errors: Partial<Credentials> = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={async (values) => {
                        dispatch(logIn(values));
                    }}
                >
                    {({ submitForm }) => (
                        <Form>
                            <h4>Sign in:</h4>
                            <Field
                                component={TextField}
                                name="email"
                                type="email"
                                label="Email"
                                variant="outlined"
                            />
                            <br />
                            <br />
                            <Field
                                component={TextField}
                                type="password"
                                label="Password"
                                name="password"
                                variant="outlined"
                            />

                            <br />
                            <br />
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Submit
                            </Button>

                            <br />
                            <br />
                            {isSubmitting && <LinearProgress />}
                        </Form>
                    )}
                </Formik>
            </Container>
        </main>
    );
}

export { LogIn };
