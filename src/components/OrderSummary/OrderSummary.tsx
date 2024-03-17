import React from "react";
import { useDataContext } from "../../context/DataContext";
import { IoMdCloseCircleOutline } from "react-icons/io";

import styles from "./OrderSummary.module.scss";

const OrderSummary: React.FC = () => {
  const { data, setData, countries, setOrderSent } = useDataContext();

  const reset = () => {
    setData({
      email: "",
      name: "",
      country: countries[0],
      address: "",
      paymentMethod: "",
      acceptTerms: false,
    });
    setOrderSent(false);
  };

  return (
    <div className={styles.orderSummary}>
      <h2>Narudžba:</h2>
      <p>Email adresa: {data.email}</p>
      <p>Ime: {data.name}</p>
      <p>Država: {data.country}</p>
      <p>Adresa: {data.address}</p>
      <p>Način plaćanja: {data.paymentMethod}</p>
      <button onClick={reset}>
        <IoMdCloseCircleOutline />
      </button>
    </div>
  );
};

export default OrderSummary;
