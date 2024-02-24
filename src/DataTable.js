import React from 'react';
import TableRow from './TableRow.js';

const DataTable = ({ data }) => {
  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>Total Volume</th>
          <th>Percentage Change</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow key={index} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;