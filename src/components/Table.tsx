/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Column {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[];
  data: any[];
  renderActions?: (row: any) => React.ReactNode;
}

const Table: React.FC<TableProps> = ({ columns, data, renderActions }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((col) => (
            <th key={col.accessor} className="border p-2">
              {col.header}
            </th>
          ))}
          {renderActions && <th className="border p-2">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <td key={col.accessor} className="border p-2">
                {row[col.accessor]}
              </td>
            ))}
            {renderActions && (
              <td className="border p-2">{renderActions(row)}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
