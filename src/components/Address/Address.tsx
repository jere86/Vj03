import React from "react";
import { useDataContext } from "../../context/DataContext";
import styles from "./Address.module.scss";

const Address: React.FC = () => {
  const { data, handleChange, setData, countries } = useDataContext();

  return (
    <div className={styles.address}>
      <p>Adresa</p>
      <label htmlFor="name">
        Ime:
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e, setData)}
        />
      </label>
      <label htmlFor="country">
        Država:
        <select
          id="country"
          name="country"
          value={data.country}
          onChange={(e) => handleChange(e, setData)}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="address">
        Adresa:
        <input
          type="text"
          id="address"
          name="address"
          value={data.address}
          onChange={(e) => handleChange(e, setData)}
        />
      </label>
    </div>
  );
};

export default Address;
