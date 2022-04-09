const errorMessages = (function errorMessages() {
  const EmptyString = (property: string) => `Por favor ingrese ${property}`;
  const MaxString = (property: string) => `${property} ha excedido el máximo de caracteres permitidos`;
  function StringError(property: string, type: string | undefined) {
    switch (type) {
      case 'string.empty':
        return `${EmptyString(property)}`;
      case 'string.max':
        return `${MaxString(property)}`;
      default:
        return `${EmptyString(property)}`;
    }
  }

  const BaseObject = (property: string) => `Por favor ingrese ${property}`;
  function ObjectError(property: string, type: string | undefined) {
    switch (type) {
      case 'object.base':
        return `${BaseObject(property)}`;
      default:
        return `${BaseObject(property)}`;
    }
  }
  return {
    ObjectError,
    StringError,
  };
}());

export default errorMessages;
