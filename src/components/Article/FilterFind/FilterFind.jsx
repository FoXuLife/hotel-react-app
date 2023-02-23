import React, {  useEffect } from "react";
import c from "./FilterFind.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../../redux/reducers/hotelReducer";
import { setFilterParams } from "../../../redux/reducers/filterReducer";
const FilterFind = React.memo(() => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ location, date, countDays }) => {
    dispatch(setFilterParams(location, date, countDays));
  };
  const filterParams = useSelector((store) => store?.filterReducer);
  useEffect(() => {
    dispatch(
      getHotel(filterParams.location, filterParams.date, filterParams.countDays)
    );
  }, [filterParams]);
  return (
    <div className={c.filterFind}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={c.dataField}>
          <label>Локация</label>
          <input
            type="text"
            defaultValue={filterParams.location}
            {...register("location")}
          />
        </div>
        <div className={c.dataField}>
          <label>Дата заселения</label>
          <input
            type="date"
            defaultValue={filterParams.date}
            min={filterParams.date}
            {...register("date")}
          />
        </div>
        <div className={c.dataField}>
          <label>Количество дней</label>
          <input
            type="text"
            defaultValue={filterParams.countDays}
            {...register("countDays")}
          />
        </div>
        <button>Найти</button>
      </form>
    </div>
  );
});

export default FilterFind;
