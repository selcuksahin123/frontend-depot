import objectPath from 'object-path';

export function hasError(touched: object, errors: object, property: objectPath.Path){
  return objectPath.get(touched, property) && Boolean(objectPath.get(errors, property));
}

export function getErrorMessage(touched: object, property: objectPath.Path){
  return objectPath.get(touched, property);
}

export function buildErrorMessageGetter(touched: object, errors: object){
  return function (property: objectPath.Path) {
    const error = objectPath.get(errors, property);
    if (typeof error === 'string') {
      return objectPath.get(touched, property) && `${error}`;
    } else if (typeof error === 'object') {
      return objectPath.get(touched, property) && `${error}`;
    }
    return '';
  };
}

export function buildHasError(touched: object, errors: object){
  return function (property: objectPath.Path) {
    return objectPath.get(touched, property) && Boolean(objectPath.get(errors, property));
  };
}
