import React, { useState } from 'react';

//recibo por props onNewCategory desde el componente padre
//por destructuring tomo const {onNewCategory} = props.onNewCategory
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  // Guardo lo que escribe el usuario en el input
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  // Agregar lo que tengo en input a la lista de categorias para ser mostrada

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si el valor ingresado es 1 o menor entonces no agrega el valor, no hace nada
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search ..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
