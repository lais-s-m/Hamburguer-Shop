import { createContext } from "react";

export const RegisterContext = createContext({});

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const RegisterProvider = ({ children }) => {
    const schema = yup.object().shape({
        name: yup.string().required("Digite seu nome"),
        email: yup.string().email("Digite um email válido"),
        password: yup.string().min(8, 'Mínimo de 8 dígitos').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'A senha precisa conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial').required('Digite uma senha'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas não conferem').required('Digite a confirmação da sua senha'),
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
        <RegisterContext.Provider value = {{ register, handleSubmit, onSubmitFunction, errors }}>
            {children}
        </RegisterContext.Provider>
    )
}