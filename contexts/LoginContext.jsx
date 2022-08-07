import { createContext } from "react";

export const LoginContext = createContext({});

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const LoginProvider = ({ children }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Digite seu nome'),
    password: yup.string().min(8, 'Mínimo de 8 dígitos').required('Digite sua senha')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(schema)
  });

  const onSubmitFunction = () => {

  }

  return (
    <LoginContext.Provider value={{ register, handleSubmit, onSubmitFunction, errors }}>
      {children}
    </LoginContext.Provider>
  )
}
