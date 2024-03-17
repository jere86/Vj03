import React from "react";
import OrderForm from "./components/OrderForm/OrderForm";
import { DataProvider } from "./context/DataContext";

const App: React.FC = () => {
  return (
    <DataProvider>
      <OrderForm />
    </DataProvider>
  );
};

export default App;
