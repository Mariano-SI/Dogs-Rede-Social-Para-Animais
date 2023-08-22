import React from 'react';

interface TypeDefinition {
  regex: RegExp;
  message: string;
}

interface Types {
  [key: string]: TypeDefinition;
}

const types: Types = {
  email: {
    regex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    message: 'Digite um e-mail válido.',
  },
  password:{
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 digito. Com no mmo 8 caracteres.'
  }
};

const useForm = (type?: string) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string| null>(null);

   function validate(value: string ) {
    //if (!type) return true;
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({target}){
    if(error){
      validate(target.value);
    }
    setValue(target.value);   
  }
  

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
