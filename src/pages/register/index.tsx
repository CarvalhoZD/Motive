import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import "./register.css"
import axios from 'axios';
import api from '../../services/api';
import { Flip, toast } from 'react-toastify';

type FormValues = {
  nome: string
  email: string
  foto: string
  senha: string,
  confirmarSenha?: string
}

export default function Register() {

  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();


  async function handleRegister(data: FormValues) {

    try {

      if (data.senha !== data.confirmarSenha) {
        toast.error('As senhas são diferentes', {
          transition: Flip,
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      } else {
        delete (data.confirmarSenha);

        await api.post('usuario', data);

        toast.success('Cadastro realizado com sucesso', {
          transition: Flip,
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });

        navigate('/login');
      }





    } catch (error) {
      if (axios.isAxiosError(error)) {
        const res = error.response;
        if (res)
          toast.error(`${res.data.message}`, {
            transition: Flip,
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
          })
      }
      console.log(error);
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' sx={{ height: "calc(100vh - 140px)" }}>
      <Grid item xs={6} className='imagem2'></Grid>
      <Grid item xs={6} alignItems='center'>
        <Box paddingX={10}>
          <form onSubmit={handleSubmit(handleRegister)}>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
            <TextField {...register('nome')} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
            <TextField {...register('email')} id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
            <TextField {...register('foto')} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
            <TextField {...register('senha')} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
            <TextField {...register('confirmarSenha')} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
            <Box marginTop={2} textAlign='center'>
              <Link to='/login' className='text-decorator-none'>
                <Button variant='contained' color='secondary' className='btnCancelar'>
                  Cancelar
                </Button>
              </Link>
              <Button type='submit' variant='contained' color='primary'>
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
