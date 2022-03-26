const errorMessages = (function() {
  const EmptyString = property => `Por favor ingrese ${property}`;
  const MaxString = property => `${property} ha excedido el máximo de caracteres permitidos`;
  function StringError(property, type) {
    switch (type) {
      case "string.empty":
        return `${EmptyString(property)}`;
      case "string.max":
        return `${MaxString(property)}`;
      default:
        return `${EmptyString(property)}`;
    }
  }

  const BaseObject = property => `Por favor ingrese ${property}`;
  function ObjectError(property, type) {
    switch (type) {
      case "object.base":
        return `${BaseObject(property)}`;
      default:
        return `${BaseObject(property)}`;
    }
  }
  return {
    ObjectError,
    StringError,
  }
})()

export default errorMessages;