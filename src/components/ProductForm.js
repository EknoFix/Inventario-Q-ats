import React, { useState } from 'react';

function ProductForm({ addProduct, categories }) {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim() || !productQuantity || !selectedCategory) return;
    
    addProduct({
      id: Date.now(),
      name: productName,
      quantity: parseInt(productQuantity),
      category: selectedCategory,
      status: 'in-stock', // 'in-stock', 'sold', 'shipped'
      date: new Date().toLocaleDateString()
    });
    
    setProductName('');
    setProductQuantity('');
    setSelectedCategory('');
  };

  return (
    <div className="form-container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          min="1"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default ProductForm;