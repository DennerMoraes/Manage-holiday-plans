import React from 'react';
import { useApiOperations } from './services/apiFunction';

function App() {
  const {
    newData,
    setNewData,
    allData,
    editingIndex,
    editedData,
    setEditedData,
    handleInsertData,
    handleStartEditing,
    handleSaveEditing,
    handleCancelEditing,
    handleDelete,
  } = useApiOperations();

  const handleChange = (e) => {
    // Certifique-se de que e.target.name corresponde aos nomes dos campos em newData
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Seu Componente</h1>
      <div>
        <h2>Inserir Dados:</h2>
        <label>Nome:
          <input type="text" name="name" value={newData.name} onChange={handleChange} />
        </label>
        <label>Descrição:
          <input type="text" name="description" value={newData.description} onChange={handleChange} />
        </label>
        <button onClick={handleInsertData}>Inserir Dados</button>
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
