import React from "react";
import { useDataContext } from "../../context/DataContext";
import styles from "./PaymentMethod.module.scss";

const PaymentMethod: React.FC = () => {
  const { data, handleChange, setData } = useDataContext();

  return (
    <div className={styles.paymentMethod}>
      <p>Način plaćanja</p>
      <label htmlFor="paymentMethod1">
        <input
          type="radio"
          id="paymentMethod1"
          name="paymentMethod"
          value="Pouzeće"
          checked={data.paymentMethod === "Pouzeće"}
          onChange={(e) => handleChange(e, setData)}
        />
        Pouzeće
      </label>
      <label htmlFor="paymentMethod2">
        <input
          type="radio"
          id="paymentMethod2"
          name="paymentMethod"
          value="Kartica"
          checked={data.paymentMethod === "Kartica"}
          onChange={(e) => handleChange(e, setData)}
        />
        Kartica
      </label>
    </div>
  );
};

export default PaymentMethod;
