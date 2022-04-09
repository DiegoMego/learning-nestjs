import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import axios from 'axios';
import PageLayout from '../../layouts/PageLayout';
import errorMessages from '../../helpers/ErrorMessages';
import CustomControl from '../../components/Forms/CustomControl';

const USERS_API = process.env.REACT_APP_BASE_API_URL_USERS;

type CreateUserType = {
  email: string,
  username: string,
  password: string,
}

const schema = Joi.object({
  email: Joi.string().empty().max(256),
  username: Joi.string().max(256),
  password: Joi.string().max(256),
});

export default function CreateUser() {
  const { formState: { errors }, handleSubmit, register } = useForm({
    mode: 'all',
    resolver: joiResolver(schema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  });

  const handleSuccess = async (values: CreateUserType) => {
    const response = await axios.post(`${USERS_API}/create`, {
      Email: values.email,
      Username: values.username,
      Password: values.password,
    });
    console.log(response);
  };

  return (
    <PageLayout>
      <h2>Crear Usuario</h2>
      <Form className="form" onSubmit={handleSubmit(handleSuccess)}>
        <Form.Group controlId="email">
          <Form.Label>Correo</Form.Label>
          <CustomControl
            type="email"
            placeholder=""
            isInvalid={!!errors && !!errors.email}
            register={register('email')}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.StringError('el correo del usuario', errors?.email?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Usuario</Form.Label>
          <CustomControl
            type="username"
            placeholder=""
            isInvalid={!!errors && !!errors.username}
            register={register('username')}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.StringError('el nombre del usuario', errors?.username?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <CustomControl
            type="password"
            placeholder=""
            isInvalid={!!errors && !!errors.password}
            register={register('password')}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.StringError('la contraseña del usuario', errors?.password?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </PageLayout>
  );
}