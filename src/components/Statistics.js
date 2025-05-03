import React from 'react';

function Statistics({ products }) {
  // Calcular estadísticas
  const totalProducts = products.length;
  const soldProducts = products.filter(p => p.status === 'sold').length;
  const shippedProducts = products.filter(p => p.status === 'shipped').length;
  const inStockProducts = products.filter(p => p.status === 'in-stock').length;

  // Calcular porcentajes
  const soldPercentage = totalProducts > 0 ? (soldProducts / totalProducts * 100).toFixed(2) : 0;
  const shippedPercentage = totalProducts > 0 ? (shippedProducts / totalProducts * 100).toFixed(2) : 0;
  const inStockPercentage = totalProducts > 0 ? (inStockProducts / totalProducts * 100).toFixed(2) : 0;

  return (
    <div className="statistics">
      <h2>Estadísticas de Productos</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total de Productos</h3>
          <p>{totalProducts}</p>
        </div>
        <div className="stat-card">
          <h3>Productos Vendidos</h3>
          <p>{soldProducts} ({soldPercentage}%)</p>
        </div>
        <div className="stat-card">
          <h3>Productos Enviados</h3>
          <p>{shippedProducts} ({shippedPercentage}%)</p>
        </div>
        <div className="stat-card">
          <h3>Productos en Stock</h3>
          <p>{inStockProducts} ({inStockPercentage}%)</p>
        </div>
      </div>
      
      <div className="chart-container">
        <h3>Distribución de Productos</h3>
        <div className="chart">
          <div 
            className="chart-bar sold" 
            style={{ width: `${soldPercentage}%` }}
            title={`Vendidos: ${soldPercentage}%`}
          ></div>
          <div 
            className="chart-bar shipped" 
            style={{ width: `${shippedPercentage}%` }}
            title={`Enviados: ${shippedPercentage}%`}
          ></div>
          <div 
            className="chart-bar in-stock" 
            style={{ width: `${inStockPercentage}%` }}
            title={`En Stock: ${inStockPercentage}%`}
          ></div>
        </div>
        <div className="chart-legend">
          <div><span className="legend-color sold"></span> Vendidos</div>
          <div><span className="legend-color shipped"></span> Enviados</div>
          <div><span className="legend-color in-stock"></span> En Stock</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;