import React from 'react';

const TableRow = ({ data }) => {
  const { name, image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap } = data;

  const percentageClassName = price_change_percentage_24h < 0 ? 'negative' : 'positive';

  return (
    <tr>
      <td>{name}</td>
      <td><img src={image} alt={name} className="coin-image" /></td>
      <td>{symbol}</td>
      <td>{current_price}</td>
      <td>{total_volume}</td>
      <td className={percentageClassName}>{price_change_percentage_24h}%</td>
      <td>${market_cap}</td>
    </tr>
  );
};

export default TableRow;