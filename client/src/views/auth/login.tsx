import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import ContentLayout from '../../layouts/content.layout';
import auth from '../../redux/actions/auth.action';
import errorMessages from '../../helpers/error-messages.helper';
import InputControl from '../../components/controls/input.control';
import { useAppDispatch, useAppSelector } from '../../hooks/store.hooks';

const schema = Joi.object({
  username: Joi.string().max(256),
  password: Joi.string().max(256),
});

export default function Login() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);
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
    <ContentLayout>
      <Card className="text-center shadow">
        <Card.Img src="/public/images/logo.svg" className="logo align-self-center py-4" />
        <Card.Body>
          {error?.success === false && <p className="text-danger">{error.message}</p>}
          <Form className="form" onSubmit={handleSubmit(handleSuccess)}>
            <Form.Group controlId="username">
              <InputControl
                type="text"
                placeholder="usuario"
                isInvalid={!!errors && !!errors.username}
                register={register('username')}
              />
              <Form.Control.Feedback type="invalid">{errorMessages.StringError('el nombre del usuario', errors?.username?.type)}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password">
              <InputControl
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
    </ContentLayout>
  );
}
