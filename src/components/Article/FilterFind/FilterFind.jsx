import React, { useEffect } from "react";
import c from "./FilterFind.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getHotel } from "../../../redux/reducers/hotelReducer";
import { getFilterParams } from "../../../redux/reducers/filterReducer";
const FilterFind = React.memo(() => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const filterParams = useSelector((store) => store?.filterReducer);
  const serverErrors = useSelector((store) => store?.hotelReducer.errors);
  const onSubmit = ({ location, date, countDays }) => {
    dispatch(getFilterParams(location, date, countDays));
  };
  useEffect(() => {
    dispatch(
      getHotel(filterParams.location, filterParams.date, filterParams.countDays)
    );
  }, []);
  return (
    <div className={c.filterFind}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`${c.dataField} ${
            (errors.location || serverErrors) && c.errors
          }`}
        >
          <label>Локация</label>
          <input
            type="text"
            defaultValue={filterParams.location}
            {...register("location", {
              required: "Введите город",
            })}
          />
          {(errors.location && <p>{errors.location.message}</p>) ||
            (serverErrors && <p>{serverErrors}</p>)}
        </div>
        <div className={`${c.dataField} ${errors.date && c.errors}`}>
          <label>Дата заселения</label>
          <input
            type="date"
            defaultValue={filterParams.date}
            min={filterParams.date}
            {...register("date")}
          />
        </div>
        <div className={`${c.dataField} ${errors.countDays && c.errors}`}>
          <label>Количество дней</label>
          <input
            type="number"
            max="365"
            min="1"
            defaultValue={filterParams.countDays}
            {...register("countDays", {
              required: "Введите количество дней",
            })}
          />
          {errors.countDays && <p>{errors.countDays.message}</p>}
        </div>
        <button>Найти</button>
      </form>
    </div>
  );
});

export default FilterFind;
