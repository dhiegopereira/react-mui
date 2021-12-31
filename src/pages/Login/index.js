import { useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Redirect from "../../components/Redirect";
import { Alert, Button, Grid, TextField } from '@mui/material';

export default function Login() {

  const [user, setUser] = useState("");
  const [isAlert, setAlert] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async () => {
    await login(user)
      ? navigate("/repository")
      : setAlert(true);

  };

  return (
    <Redirect>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt={30}>
        <Grid border={5} p={2} borderColor="silver" borderRadius={5} >
          <Grid sx={{ textAlign: "center" }} center xs={12} md={12} sm={12} >
            <img src="./github-logo-vector.svg" width="150" />
          </Grid>

          <Grid mt={5} xs={12} md={12} sm={12}>
            <TextField
              fullWidth
              label="Usuário"
              placeholder="Digite seu usuário"
              onChange={(e) => setUser(e.target.value)} />

            <Button
              sx={{ mt: 2 }}
              fullWidth
              variant="contained"
              color="success"
              onClick={handleSubmit}>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid mt={2}>
        {
          isAlert &&
          <Alert
            severity="error"
            onClose={() => { setAlert(false) }}>
            Usuário inexistente!!!
          </Alert>
        }
      </Grid>
    </Redirect>
  );
}