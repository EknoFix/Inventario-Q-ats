import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import ProductForm from './ProductForm';
import InventoryList from './InventoryList';
import Statistics from './Statistics';
import LogoutButton from './Auth/LogoutButton';
function InventorySystem() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, {
      id: Date.now(),
      name: category.name
    }]);
  };

  const addProduct = (product) => {
    setProducts([...products, {
      id: Date.now(),
      name: product.name,
      quantity: parseInt(product.quantity),
      category: product.category,
      status: 'in-stock',
      date: new Date().toLocaleDateString()
    }]);
  };

  const updateProductStatus = (id, status) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, status } : product
    ));
  };

  return (
    <div className="inventory-system">
      <h1>Sistema de Gestión de Inventario</h1>
      
      <div className="forms-container">
        <CategoryForm addCategory={addCategory} />
        <ProductForm 
          addProduct={addProduct} 
          categories={categories} 
        />
      </div>
      
      <InventoryList 
        products={products} 
        updateProductStatus={updateProductStatus} 
      />
      
      <Statistics products={products} />
      <LogoutButton />
    </div>
  );
}

export default InventorySystem;