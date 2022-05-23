import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Enterprise from "../../models/enterprise"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom"
import api from "../../services/api";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Match Vagas UFMG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function CadastrarEmpresa() {

  const history = useHistory();

  const createEnterprise = async e => {
    const data = new FormData(e.currentTarget)
    const name = data.get("nome")
    const cnpj =  data.get("cnpj")
    const phone_number = data.get("Telefone")
    const email = data.get("email")
    const password = data.get("password")

    try {
      const response = await api.post("/api/register_enterprise/", { name, cnpj, email, password, phone_number });
      console.log(response.data);
      history.push("/feed")
    } catch (err) {
        window.alert("Seu email e cnpj devem ser únicos")
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createEnterprise(event)
    /*
    const enterprise = new Enterprise(
      data.get("nome"),
      data.get("cnpj"),
      data.get("Telefone"),
      data.get("email"),
      data.get("password")
    );

    var success = enterprise.createEnterprise();
    */
    /*
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    */
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ width: "50%" }}>
        <CssBaseline />
        <Typography
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          component="h1"
          variant="h3"
        >
          Já está quase lá...
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 1,
            mt: 3,
            padding: theme.spacing(2, 4, 2, 4),
          }}
        >
          <Typography component="h1" variant="h5">
            Inscreva-se para obter um conta grátis
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className=".cpf-mask"
                  autoComplete="given-name"
                  name="cnpj"
                  required
                  fullWidth
                  type="cnpj"
                  id="cnpj"
                  label="CNPJ"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  name="Telefone"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmar senha"
                  type="password"
                  id="confirmPassword"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar-se
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#Login" variant="body2">
                  Já possui uma conta? Faça Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
