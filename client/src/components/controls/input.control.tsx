import React from 'react';
import { Form } from 'react-bootstrap';

export default function InputControl({
  type,
  placeholder,
  isInvalid,
  register: {
    onChange,
    onBlur,
    name,
    ref,
  },
}: {
  type: string,
  placeholder: string,
  isInvalid: boolean,
  register: {
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
    name: string,
    ref: React.RefCallback<HTMLInputElement>
  }
}) {
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      isInvalid={isInvalid}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      ref={ref}
    />
  );
}
