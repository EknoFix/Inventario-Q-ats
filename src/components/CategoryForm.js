import React, { useState } from 'react';

function CategoryForm({ addCategory }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName.trim()) return;
    
    addCategory({
      id: Date.now(),
      name: categoryName
    });
    
    setCategoryName('');
  };

  return (
    <div className="form-container">
      <h2>Agregar Categoría</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la categoría"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default CategoryForm;