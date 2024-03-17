import React, { createContext, useContext, useState, ReactNode } from "react";
import { countries, handleChange, isValidEmail } from "../helpers/dataUtils";

interface DataData {
  email: string;
  name: string;
  country: string;
  address: string;
  paymentMethod: string;
  acceptTerms: boolean;
}

interface ContextProps {
  data: DataData;
  setData: React.Dispatch<React.SetStateAction<DataData>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setData: React.Dispatch<React.SetStateAction<DataData>>
  ) => void;
  isValidEmail: (email: string) => boolean;
  countries: string[];
  orderSent: boolean;
  setOrderSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<ContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataData>({
    email: "",
    name: "",
    country: countries[0],
    address: "",
    paymentMethod: "",
    acceptTerms: false,
  });

  const [orderSent, setOrderSent] = useState(false);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        handleChange,
        isValidEmail,
        countries,
        orderSent,
        setOrderSent,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
