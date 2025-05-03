import React from 'react';

function InventoryList({ products, updateProductStatus }) {
  const handleStatusChange = (id, newStatus) => {
    updateProductStatus(id, newStatus);
  };

  return (
    <div className="inventory-list">
      <h2>Lista de Inventario</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>
                {product.status === 'in-stock' && 'En Stock'}
                {product.status === 'sold' && 'Vendido'}
                {product.status === 'shipped' && 'Enviado'}
              </td>
              <td>{product.date}</td>
              <td>
                {product.status === 'in-stock' && (
                  <>
                    <button onClick={() => handleStatusChange(product.id, 'sold')}>
                      Marcar como Vendido
                    </button>
                    <button onClick={() => handleStatusChange(product.id, 'shipped')}>
                      Marcar como Enviado
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;