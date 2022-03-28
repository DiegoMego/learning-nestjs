import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import axios from 'axios';
import PageLayout from '../../layouts/PageLayout';
import errorMessages from '../../helpers/ErrorMessages';

const USERS_API = process.env.REACT_APP_BASE_API_URL_USERS;

const schema = Joi.object({
  email: Joi.string().empty().max(256),
  username: Joi.string().max(256),
  password: Joi.string().max(256)
});

export default function CreateUser() {
  const {formState: { errors }, handleSubmit, register} = useForm({
    mode: 'all',
    resolver: joiResolver(schema),
    defaultValues: {
      email: "",
      username: "",
      password: ""
    }
  });

  const handleSuccess = async (values) => {
    const response = await axios.post(`${USERS_API}/create`, {
      Email: values.email,
      Username: values.username,
      Password: values.password
    });
  }

  return (
    <PageLayout>
      <h2>Crear Usuario</h2>
      <Form className="form" onSubmit={handleSubmit(async (data) => await handleSuccess(data))}>
        <Form.Group controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            isInvalid={errors && errors.email}
            {...register('email')}/>
          <Form.Control.Feedback type='invalid'>{errorMessages.StringError("el correo del usuario", errors?.email?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            isInvalid={errors && errors.username}
            {...register('username')}/>
          <Form.Control.Feedback type='invalid'>{errorMessages.StringError("el nombre del usuario", errors?.username?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            isInvalid={errors && errors.password}
            {...register('password')}/>
          <Form.Control.Feedback type='invalid'>{errorMessages.StringError("la contraseña del usuario", errors?.password?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </PageLayout>
  );
}