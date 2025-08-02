import React from 'react';

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="py-2 px-4 border-b">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100">
            {columns.map((column) => (
              <td key={column.accessor} className="py-2 px-4 border-b">
                {row[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;