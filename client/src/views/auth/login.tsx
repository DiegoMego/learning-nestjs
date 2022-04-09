import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import PageLayout from '../../layouts/PageLayout';
import auth from '../../redux/actions/auth.action';
import errorMessages from '../../helpers/ErrorMessages';
import CustomControl from '../../components/Forms/CustomControl';

const schema = Joi.object({
  username: Joi.string().max(256),
  password: Joi.string().max(256),
});

export default function Login() {
  const dispatch = useDispatch();
  const { formState: { errors }, handleSubmit, register } = useForm({
    mode: 'all',
    resolver: joiResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSuccess = async (values: { username: string, password: string }) => {
    dispatch(auth.login(
      {
        Username: values.username,
        Password: values.password,
      },
    ));
  };

  return (
    <PageLayout>
      <Card className="text-center shadow">
        <Card.Img src="/public/images/logo.svg" className="logo align-self-center py-4" />
        <Card.Body>
          <Form className="form" onSubmit={handleSubmit(handleSuccess)}>
            <Form.Group controlId="username">
              <CustomControl
                type="text"
                placeholder="usuario"
                isInvalid={!!errors && !!errors.username}
                register={register('username')}
              />
              <Form.Control.Feedback type="invalid">{errorMessages.StringError('el nombre del usuario', errors?.username?.type)}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <CustomControl
                type="password"
                placeholder="contraseña"
                isInvalid={!!errors && !!errors.password}
                register={register('password')}
              />
              <Form.Control.Feedback type="invalid">{errorMessages.StringError('la contraseña del usuario', errors?.password?.type)}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </PageLayout>
  );
}
