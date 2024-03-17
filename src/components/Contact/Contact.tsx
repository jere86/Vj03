import React from "react";
import { useDataContext } from "../../context/DataContext";
import styles from "./Contact.module.scss";

const Contact: React.FC = () => {
  const { data, handleChange, setData, isValidEmail } = useDataContext();

  return (
    <div className={styles.contact}>
      <p>Kontakt</p>
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="Email adresa..."
        onChange={(e) => handleChange(e, setData)}
      />
      {!isValidEmail(data.email) && data.email !== "" && (
        <div className={styles.errorEMail}>*Unesite ispravnu email adresu.</div>
      )}
    </div>
  );
};

export default Contact;
