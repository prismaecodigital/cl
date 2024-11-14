export default function MyTable({ data, columns }) {
  // Render cell if number or data
  function renderCell(col, colIndex, rowIndex, item) {
    if (col.key === 'id') {
      return rowIndex + 1;
    }

    // Check if column has 'render' key
    return col.render ? col.render(col, colIndex) : item[col.key];
  }

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className={col.classHead}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? data.map((item, index) => (
            <tr key={index} className='group'>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={`group-hover:text-ole ` + col.classBody}>
                  { renderCell(col, colIndex, index, item) }
                </td>
              ))}
            </tr>
          )) : (
            <tr className='text-center'>
              <td colSpan={(columns.length + 1)}>Empty data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
