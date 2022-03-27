import PageLayout from '../../layouts/PageLayout';

const Login = props => {
  return (
    <PageLayout>
      <Form className="form" onSubmit={handleSubmit(async (data) => await handleSuccess(data))}>
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

export default Login;