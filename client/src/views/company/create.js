import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Select from 'react-select';
import PageLayout from '../../layouts/PageLayout';
import errorMessages from '../../helpers/ErrorMessages';
import company from '../../redux/actions/company.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const COMPANY_API = process.env.REACT_APP_BASE_API_URL_COMPANY;

const schema = Joi.object({
  name: Joi.string().empty().max(512),
  ruc: Joi.string().max(256),
  industry: Joi.object({
    value: Joi.number().min(1).max(18),
    label: Joi.string()
  }).required(),
  companytype: Joi.object({
    value: Joi.number().min(1).max(2),
    label: Joi.string()
  }).required(),
  phone: Joi.string().allow('').max(15),
  address: Joi.string().allow('').max(256),
  district: Joi.string().allow('').max(256),
  city: Joi.string().allow('').max(256),
  state: Joi.string().allow('').max(256),
  country: Joi.string().allow('').max(256)
});

export default function CreateCompany() {
  const {control, formState: { errors }, handleSubmit, register} = useForm({
    mode: 'all',
    resolver: joiResolver(schema),
    defaultValues: {
      name: "",
      ruc: "",
      industry: null,
      companytype: null,
      phone: "",
      address: "",
      district: "",
      city: "",
      state: "",
      country: ""
    }
  });

  const dispatch = useDispatch();
  const dropdowns = useSelector(state => state.company.dropdowns);

  useEffect(_ => {
    dispatch(company.industries.get());
    dispatch(company.types.get());
  }, []);

  const handleSuccess = async (values) => {
    const response = await axios.post(`${COMPANY_API}/create`, {
      Name: values.name,
      RUC: values.ruc,
      CompanyIndustryId: values.industry.value,
      CompanyTypeId: values.companytype.value
    });
  }

  return (
    <PageLayout>
      <h2>Crear Compañía</h2>
      <Form className="form" onSubmit={handleSubmit(async (data) => await handleSuccess(data))}>
        <Form.Group controlId="name">
          <Form.Label>Nombre de la Compañía</Form.Label>
          <Form.Control
            type="text"
            isInvalid={errors && errors.name}
            {...register('name')}/>
          <Form.Control.Feedback type='invalid'>{errorMessages.StringError("el nombre", errors?.name?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="ruc">
          <Form.Label>RUC</Form.Label>
          <Form.Control
            type="text"
            isInvalid={errors && errors.ruc}
            {...register('ruc')}/>
          <Form.Control.Feedback type='invalid'>{errorMessages.StringError("el RUC", errors?.ruc?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="industry">
          <Form.Label>Industria de la Compañía</Form.Label>
          <Controller
            control={control}
            name='industry'
            render={({field}) => (
              <Select
                {...field}
                cacheOptions
                defaultOptions
                className={errors && errors.industry ? 'is-invalid': ''}
                options={dropdowns.industries}/>
            )}
          />
          <Form.Control.Feedback type='invalid'>{errorMessages.ObjectError("la industria", errors?.industry?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="companytype">
          <Form.Label>Tipo de Compañía</Form.Label>
          <Controller
            control={control}
            name='companytype'
            render={({field}) => (
              <Select
              {...field}
                cacheOptions
                defaultOptions
                className={errors && errors.companytype ? 'is-invalid' : ''}
                options={dropdowns.types}/>
            )}
          />
          <Form.Control.Feedback type='invalid'>{errorMessages.ObjectError("el tipo", errors?.companytype?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" {...register('phone')}/>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" {...register('address')}/>
        </Form.Group>
        <Form.Group controlId="district">
          <Form.Label>Distrito</Form.Label>
          <Form.Control type="text" {...register('district')}/>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" {...register('city')}/>
        </Form.Group>
        <Form.Group controlId="state">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" {...register('state')}/>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>País</Form.Label>
          <Form.Control type="text" {...register('country')}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </PageLayout>
  );
}