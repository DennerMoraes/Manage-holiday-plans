import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {
  const [newData, setNewData] = useState({});
  const [allData, setAllData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({}); // Dados editados

  useEffect(() => {
    // Função para carregar dados da API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        console.log(response.data);
        setAllData(response.data.data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData(); // Chama a função para carregar dados ao montar o componente
  }, []);

  const handleInsertData = () => {
    const newDataWithId = { id: uuidv4(), ...newData }; // Use uuidv4() para gerar um ID único
    axios.post('http://localhost:3001/api/data', newDataWithId)
      .then(response => {
        console.log(response.data);
        setAllData(prevData => [...prevData, response.data.data]);
      })
      .catch(error => {
        console.error('Erro ao inserir dados:', error);
      });
  };

  const handleStartEditing = (index, data) => {
    setEditingIndex(index);
    setEditedData(data);
  };

  const handleSaveEditing = () => {
    axios.put(`http://localhost:3001/api/data/${editingIndex}`, editedData)
      .then(response => {
        console.log(response.data);
        const updatedAllData = [...allData];
        updatedAllData[editingIndex] = response.data.data;
        setAllData(updatedAllData);
        // Limpar estados de edição
        setEditingIndex(null);
        setEditedData({});
      })
      .catch(error => {
        console.error(`Erro ao editar dados no índice ${editingIndex}:`, error);
      });
  };

  const handleCancelEditing = () => {
    // Limpar estados de edição
    setEditingIndex(null);
    setEditedData({});
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/data/${id}`)
      .then(response => {
        console.log(response.data);
        // Atualiza o estado removendo o item excluído
        setAllData(prevData => prevData.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error(`Erro ao excluir dados com ID ${id}:`, error);
      });
  };

  const handleGeneratePDF = () => {
    const pdf = new jsPDF();

    // Substitua 'conteudo-pdf' pelo ID do elemento que deseja incluir no PDF
    const content = document.getElementById('testepdf');

    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 15, 15);

      pdf.save('documento.pdf');
    });
  };

  return (
    <div id='testepdf'>
      <h1>Meu Aplicativo React com API CRUD</h1>

      <div>
        <h2>Inserir Dados:</h2>
        <label>Nome:
          <input type="text" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
        </label>
        <label>Descrição:
          <input type="text" value={newData.description} onChange={(e) => setNewData({ ...newData, description: e.target.value })} />
        </label>
        <button onClick={handleInsertData}>Inserir Dados</button>
      </div>

      <div>
        {/* Seu conteúdo aqui */}
        <button onClick={handleGeneratePDF}>Gerar PDF</button>
      </div>

      <div>
        <h2>Dados Atuais:</h2>
        <ul>
          {allData.map((item, index) => (
            <li key={index}>
              {item.name} - {item.description}
              {editingIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editedData.name || ''}
                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedData.description || ''}
                    onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                  />
                  <button onClick={handleSaveEditing}>Salvar</button>
                  <button onClick={handleCancelEditing}>Cancelar</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => handleStartEditing(index, item)}>Editar</button>
                  <button onClick={() => handleDelete(item.id)}>Excluir</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
