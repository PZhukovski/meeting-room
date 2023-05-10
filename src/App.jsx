import { Controller, useForm } from "react-hook-form";
import { countRange } from "./helpers/countRange";
import { timeRange } from "./helpers/timeRange";
import SelectComponent from "./components/select/Select";
import { useRef } from "react";

import "./App.css";
import cn from "classnames";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const floorsRange = countRange(3, 27);
  const meetingsRoomRange = countRange(1, 10);
  const time = timeRange();
  const floorValue = useRef(null);
  const towerValue = useRef(null);
  const meetingValue = useRef(null);
  const timeValue = useRef(null);
  const towers = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ];

  const handleClear = () => {
    floorValue.current.clearValue();
    towerValue.current.clearValue();
    meetingValue.current.clearValue();
    timeValue.current.clearValue();
  };

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="container">
      <h1 className="title">Забронируйте переговорную</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="selects">
          <div>
            <label className="label">
              <span className="description">Выберите здание</span>
              <Controller
                name="tower"
                control={control}
                defaultValue=""
                rules={{ required: "Поле обязательно" }}
                render={({ field: { onChange, value } }) => (
                  <SelectComponent
                    placeholder="Башня"
                    refSelect={towerValue}
                    options={towers}
                    value={value}
                    onChange={onChange}
                    error={errors.tower}
                  />
                )}
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="description">Выберите этаж</span>
              <Controller
                name="floors"
                control={control}
                defaultValue=""
                rules={{ required: "Поле обязательно" }}
                render={({ field: { onChange, value } }) => (
                  <SelectComponent
                    placeholder="Этаж"
                    refSelect={floorValue}
                    options={floorsRange}
                    value={value}
                    onChange={onChange}
                    error={errors.floors}
                  />
                )}
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="description">Выберите номер переговорной</span>
              <Controller
                name="meetingsRoom"
                control={control}
                defaultValue=""
                rules={{ required: "Поле обязательно" }}
                render={({ field: { onChange, value } }) => (
                  <SelectComponent
                    placeholder="Переговорная"
                    refSelect={meetingValue}
                    options={meetingsRoomRange}
                    value={value}
                    onChange={onChange}
                    error={errors.meetingsRoom}
                  />
                )}
              />
            </label>
          </div>
        </div>
        <div className="block">
          <div className="date">
            <label className="label">
              <span className="description">Выберите дату</span>
              <input
                className={cn("input", { ["errorBorder"]: errors.date })}
                type="date"
                {...register("date", { required: "Дата обязательна" })}
              />
              {errors.date && (
                <span className="error">{errors.date.message}</span>
              )}
            </label>
            <label className="label">
              <span className="description">Выберите время</span>
              <Controller
                name="time"
                control={control}
                defaultValue=""
                rules={{ required: "Поле обязательно" }}
                render={({ field: { onChange, value } }) => (
                  <SelectComponent
                    placeholder="Время"
                    refSelect={timeValue}
                    options={time}
                    value={value}
                    onChange={onChange}
                    error={errors.time}
                  />
                )}
              />
            </label>
          </div>
        </div>
        <div className="block">
          <label className="label">
            <span className="description">Комментарий</span>
            <textarea
              className="textarea"
              defaultValue=""
              {...register("comment")}
            />
          </label>
        </div>
        <div className="block">
          <div className="buttons">
            <button type="submit" className="button">
              Отправить
            </button>
            <button type="reset" onClick={handleClear} className="button">
              Очистить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
