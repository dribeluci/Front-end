import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UsuarioLogin from '../../model/UsuarioLogin';

import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';


function Login() {


    let history = useNavigate()
    const dispatch = useDispatch()
    const [token, setToken] = useState('')

    const [usuarioLogin, setusuarioLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        dataNascimento: "",
        token: ""
    })
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setusuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login('/usuarios/login', usuarioLogin, setToken)
            alert("Usuário logado com sucesso");

        } catch (error) {
            alert("Dados do usuário inconsistentes");
        };

    }



    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem1'>

            </Grid>

        </Grid>
    );
}

export default Login