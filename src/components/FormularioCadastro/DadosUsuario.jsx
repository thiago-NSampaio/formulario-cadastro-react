import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../rooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const validacoes = useContext(ValidacoesCadastro) 

  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) {
        aoEnviar({email, senha})
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id="email"
        label="email"
        name="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
         value={senha}
         onChange={(event) => {
           setSenha(event.target.value)
         }}
        id="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        label="senha"
        onBlur={validarCampos}
        name="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
    </form>
  );
}
export default DadosUsuario;
