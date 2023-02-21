import React from "react";
import c from "./FilterFind.module.scss";
const DataPicker = () => {
  return (
    <div className={c.filterFind}>
      <form action="">
        <div className={c.dataField}>
          <label>Локация</label>
          <input type="text" />
        </div>
        <div className={c.dataField}>
          <label>Дата заселения</label>
          <input type="date" />
        </div>
        <div className={c.dataField}>
          <label>Количество дней</label>
          <input type="data" />
        </div>
        <button>Найти</button>
      </form>
    </div>
  );
};

export default DataPicker;
