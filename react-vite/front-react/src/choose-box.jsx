import getData from '../services/index';
import { useEffect, useState } from 'react';
import Form from './form';
import axios from 'axios';


function Choose() {
  const [data, setData] = useState([]);
  const [selectItem, setSelectItem] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [nome, setNome] = useState('')
  const [status, setStatus] = useState('')
  const [fechamento, setFechamento] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData();
        console.log(res.tasks);
        setData(res.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function handleSelectedItem(e) {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const selectedItem = data.find((item) => item._id === selectedValue);
      setSelectItem(selectedItem);
    } else {
      setSelectItem(null);
    }
  }
  
  async function handleDelete() {
    if (window.confirm('Are you sure you want to delete'))
    try {
      axios.delete(`http://localhost:3000/tasks/${selectItem._id}`)
      console.log("Sucesso!")
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate() {
   const updateItem = {}
   if (nome) updateItem.nome = nome;
   if (status) updateItem.status = status;
   if (fechamento) updateItem.fechamento = fechamento;

   try {
    await axios.patch(`http://localhost:3000/tasks/${selectItem._id}`, updateItem)
    console.log("Sucesso!")
    window.location.reload()
   } catch (error) {
    console.log('erro')
    console.error(error);
   }
  }

  function handleEdit(){
    setShowEdit(true);
    }

  

  return (
    <div>
      <select onChange={handleSelectedItem}>
        <option value="">Selecionar Tasks</option>
        {data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.nome}
          </option>
        ))}
      </select>
      <div>
        <br></br>
      </div>

      {selectItem && (
        <div>
          <h2>{selectItem.nome}</h2>
          <p>{selectItem.status}</p>
          <p>{selectItem.inicio}</p>
          <p>{selectItem.fechamento}</p>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>

            {showEdit && (
              <div>
                <br/>
              <input type="text" placeholder='Nome' value={nome} onChange={(e) => {setNome(e.target.value)}}/>
              <input type="text" placeholder='Status' value={status} onChange={(e) => {setStatus(e.target.value)}}/>
              <input type="text" placeholder='Fechamento' value={fechamento} onChange={(e) => {setFechamento(e.target.value)}}/>
              <button onClick={handleUpdate}>Enviar</button>
            </div>
            )} 
    
        </div>
      )}

      <div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Choose;
