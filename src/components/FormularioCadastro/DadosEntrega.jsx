import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({cep, endereco, numero, estado, cidade})
    }}>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        type="number"
        label="CEP"
        name="cep"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        id="endereco"
        type="text"
        label="Endereço"
        name="endereco"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        id="numero"
        type="number"
        label="Número"
        name="numero"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
        id="estado"
        type="text"
        label="Estado"
        name="estado"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
        id="cidade"
        type="text"
        label="Cidade"
        name="cidade"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
          Finalizar Cadastro
        </Button>
    </form>
  );
}

export default DadosEntrega;
