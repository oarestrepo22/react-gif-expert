//cx6WJqCxNTvxpkKyZOdAiCun0G7fBmfH
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'Animados',
    /* 'Politica',
    'Humor', */
  ]);  

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory))
      return alert('La categoria ya existe');
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* le paso la prop onNewCategory al componente hijo*/}
      <AddCategory onNewCategory={handleAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
