import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import Select from 'react-select';
import { useAppSelector, useAppDispatch } from '../../hooks/store.hooks';
import ContentLayout from '../../layouts/content.layout';
import errorMessages from '../../helpers/error-messages.helper';
import company from '../../redux/actions/company.action';
import InputControl from '../../components/controls/input.control';
import api from '../../api';

type CreateCompanyType = {
  name: string,
  ruc: string,
  industry: {
    label: string,
    value: number,
  },
  companytype: {
    label: string,
    value: number,
  },
  phone: string,
  address: string,
  district: string,
  city: string,
  state: string,
  country: string,
}

const schema = Joi.object({
  name: Joi.string().empty().max(512),
  ruc: Joi.string().max(256),
  industry: Joi.object({
    value: Joi.number().min(1).max(18),
    label: Joi.string(),
  }).required(),
  companytype: Joi.object({
    value: Joi.number().min(1).max(2),
    label: Joi.string(),
  }).required(),
  phone: Joi.string().allow('').max(15),
  address: Joi.string().allow('').max(256),
  district: Joi.string().allow('').max(256),
  city: Joi.string().allow('').max(256),
  state: Joi.string().allow('').max(256),
  country: Joi.string().allow('').max(256),
});

export default function CreateCompany() {
  const {
    control, formState: { errors }, handleSubmit, register,
  } = useForm<CreateCompanyType>({
    mode: 'all',
    resolver: joiResolver(schema),
    defaultValues: {
      name: '',
      ruc: '',
      industry: {
        label: '',
        value: 0,
      },
      companytype: {
        label: '',
        value: 0,
      },
      phone: '',
      address: '',
      district: '',
      city: '',
      state: '',
      country: '',
    },
  });

  const dispatch = useAppDispatch();
  const dropdowns = useAppSelector((state) => state.company.dropdowns);

  useEffect(() => {
    dispatch(company.industries.get());
    dispatch(company.types.get());
  }, []);

  const handleSuccess = async (values: CreateCompanyType) => {
    const response = await api.company.create({
      Name: values.name,
      RUC: values.ruc,
      CompanyIndustry: {
        Id: values.industry.value,
      },
      CompanyType: {
        Id: values.companytype.value,
      },
      Enabled: true,
    });
    console.log(response);
  };

  return (
    <ContentLayout title="Crear Compañía">
      <Form className="form" onSubmit={handleSubmit(handleSuccess)}>
        <Form.Group controlId="name">
          <Form.Label>Nombre de la Compañía</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.name}
            register={register('name')}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.StringError('el nombre', errors?.name?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="ruc">
          <Form.Label>RUC</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.ruc}
            register={register('ruc')}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.StringError('el RUC', errors?.ruc?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="industry">
          <Form.Label>Industria de la Compañía</Form.Label>
          <Controller
            control={control}
            name="industry"
            render={({ field }) => (
              <Select
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref}
                className={errors && errors.industry ? 'is-invalid' : ''}
                options={dropdowns.industries}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.ObjectError('la industria', errors?.industry?.value?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="companytype">
          <Form.Label>Tipo de Compañía</Form.Label>
          <Controller
            control={control}
            name="companytype"
            render={({ field }) => (
              <Select
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                name={field.name}
                ref={field.ref}
                className={errors && errors.companytype ? 'is-invalid' : ''}
                options={dropdowns.types}
              />
            )}
          />
          <Form.Control.Feedback type="invalid">{errorMessages.ObjectError('el tipo', errors?.companytype?.value?.type)}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.phone}
            register={register('phone')}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.address}
            register={register('address')}
          />
        </Form.Group>
        <Form.Group controlId="district">
          <Form.Label>Distrito</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.district}
            register={register('district')}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Ciudad</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.city}
            register={register('city')}
          />
        </Form.Group>
        <Form.Group controlId="state">
          <Form.Label>Estado</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.state}
            register={register('state')}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>País</Form.Label>
          <InputControl
            type="text"
            placeholder=""
            isInvalid={!!errors && !!errors.country}
            register={register('country')}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </ContentLayout>
  );
}
