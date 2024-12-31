import { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const App = () => {
  const [rowData] = useState([
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      fuel: false,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      fuel: true,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: true,
      fuel: false,
    },
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: false,
      fuel: true,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: true,
      fuel: false,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      fuel: true,
    },
  ]);

  const [columnDefs] = useState([
    { field: "make", headerName: "Make" },
    { field: "model", headerName: "Model" },
    {
      field: "price",
      headerName: "Price",
      valueFormatter: (params) => "₹" + params.value.toLocaleString(),
    },

    {
      headerName: "Energy type",
      children: [{ field: "electric" }, { field: "fuel" }],
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 tracking-tight">
        AG Grid Example
      </h1>
      <div className=" w-[100%] max-w-5xl h-[] shadow-xl rounded-lg border border-gray-300 overflow-hidden">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{
            editable: true,
            filter: true,
            sortable: true,
            resizable: true,
          }}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 30]}
          domLayout="autoHeight"
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default App;
