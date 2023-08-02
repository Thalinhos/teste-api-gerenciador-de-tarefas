import axios from 'axios';
import { useState } from 'react';

function Form() {
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState('')

    async function handleSubmit() {
      
      const formData = {
        nome: nome,
        status: status
      }

      try {
        const response = await axios.post("http://localhost:3000/create", formData, {
          headers: { "Content-Type": "application/json" }
        });
        console.log(response);
        alert('Sucesso ao inserir dados');
      } catch (error){
        console.error(error)
        alert('Erro ao enviar o formulário. Verifique o console para mais detalhes.');
      }
    }


  return (
    <div>
      <br />
      <h1>Inserir Task</h1>
      <form>
        <input type='text' placeholder='Nome' value={nome} onChange={(e) => {setNome(e.target.value)}}/>
        <br />
        <input type='text' placeholder='Status' value={status} onChange={(e) => {setStatus(e.target.value)}}/>
        <br />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
