import Head from 'next/head';
import TextField from '@mui/material/TextField';
import Button from '../Button/styles';

export default function MobileLogin() {
  return (
    <>
      <Head>
        <title>Bem-vindo à Burguer Kenzie!</title>
      </Head>
      <div>
        <h2>Login</h2>
        <TextField label="Nome" variant="outlined" />
        <TextField label="Senha" variant="outlined" />
        <Button color="green">Logar</Button>
        <p> Crie sua conta para saborear muitas delícias e matar a sua fome!</p>
        <Button>Cadastrar</Button>
      </div>
    </>
  )
}