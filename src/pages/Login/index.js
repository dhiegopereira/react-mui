import React from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Redirect from "../../components/Redirect";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Login() {

    const [user, setUser] = React.useState(""); 
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async () => {
        await login(user)
            ? navigate("/repository")
            : alert("Usuário inválido");

    };

    return (
        <Redirect>
            <Grid 
                container 
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                pt={15}>
                <Grid border={5} p={2} borderColor="silver" borderRadius={5} >
                    <Grid sx={{textAlign: "center"}} center xs={12} md={12} sm={12} >
                        <img src="./github-logo-vector.svg" width="150" />
                    </Grid>

                    <Grid mt={5} xs={12} md={12} sm={12}>
                        <TextField 
                            fullWidth 
                            label="Usuário" 
                            placeholder="Digite seu usuário" 
                            onChange={(e) => setUser(e.target.value)}  />   
                                                
                        <Button 
                            fullWidth 
                            variant="contained" 
                            color="success" 
                            onClick={handleSubmit}>
                            Entrar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Redirect>
    );
}