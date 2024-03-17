import React from "react";
import { useDataContext } from "../../context/DataContext";
import styles from "./AcceptTerms.module.scss";

const AcceptTerms: React.FC = () => {
  const { data, setData } = useDataContext();

  return (
    <div className={styles.acceptTerms}>
      <label htmlFor="acceptTerms">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={data.acceptTerms}
          onChange={(e) =>
            setData((prevData) => ({
              ...prevData,
              acceptTerms: e.target.checked,
            }))
          }
        />
        Prihvaćam uvjete narudžbe
      </label>
    </div>
  );
};

export default AcceptTerms;
