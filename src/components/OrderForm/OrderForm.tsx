import React, { useEffect } from "react";
import { useDataContext } from "../../context/DataContext";

import styles from "./OrderForm.module.scss";

import Contact from "../Contact/Contact";
import OrderSummary from "../OrderSummary/OrderSummary";
import Address from "../Address/Address";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import AcceptTerms from "../AcceptTerms/AcceptTerms";

const OrderForm: React.FC = () => {
  const { data, isValidEmail, orderSent, setOrderSent } = useDataContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!data.acceptTerms) {
      alert("Morate prihvatiti uvjete da biste naručili.");
      return;
    }

    if (!isValidEmail(data.email)) {
      alert("Unesite ispravnu email adresu.");
      return;
    }

    if (!data.name || !data.address) {
      alert("Unesite sve podatke.");
      return;
    }

    if (!data.paymentMethod) {
      alert("Odaberite način plaćanja.");
      return;
    }

    setOrderSent(true);
  };

  useEffect(() => {
    if (orderSent) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [orderSent]);

  return (
    <>
      <div className={styles.checkout}>
        <p className={styles.title}>
          Račun --&gt; <span>Plaćanje</span>
        </p>
        <form onSubmit={handleSubmit}>
          <Contact />
          <Address />
          <PaymentMethod />
          <AcceptTerms />
          <button type="submit">Naruči</button>
        </form>
      </div>
      {orderSent && (
        <div className={styles.summary}>
          <OrderSummary />
        </div>
      )}
    </>
  );
};

export default OrderForm;
