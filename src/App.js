import { useState } from "react";
import style from "./App.module.css";
import { formatDate } from "./utils";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const onAddButtonClick = () => {
    const updatedList = [...list, { id: Date.now(), value, date: new Date() }];
    if (isValueVaild) {
      setList(updatedList);
      setValue("");
      setError("");
    }
  };
  let isValueVaild = value.length >= 3;
  const onInputButtonClick = () => {
    const ValuePrompt = prompt();
    if (ValuePrompt.length >= 3) {
      setValue(ValuePrompt);
      setError("");
    } else {
      setError("Введенное значение должно содержать минимум 3 символа");
    }
    if (ValuePrompt === null) {
      return;
    }
  };
  return (
    <body>
      <div className={style["app"]}>
        <h1 className={style["page-heading"]}>Ввод значения</h1>
        <p className={style["no-margin-text"]}>
          Текущее значение <code>value</code>: "
          <output className={style["current-value"]}>{value}</output>"
        </p>
        <div className={style["error"]}>{error}</div>
        {error !== ""}
        <div className={style["buttons-container"]}>
          <button className={style["button"]} onClick={onInputButtonClick}>
            Ввести новое
          </button>
          <button
            className={style["button"]}
            onClick={onAddButtonClick}
            disabled={!isValueVaild}
          >
            Добавить в список
          </button>
        </div>
        <div className={style["list-container"]}>
          <h2 className={style["list-heading"]}>Список:</h2>
          {list.length > 0 ? (
            <ul className={style["list"]}>
              {list.map((item) => (
                <li key={item.id} className={style["list-item"]}>
                  {item.value}(
                  <time dateTime={item.date.toISOString()}>
                    {formatDate(item.date)}
                  </time>
                  )
                </li>
              ))}
            </ul>
          ) : (
            <p className={style["no-margin-text"]}>Нет добавленных элементов</p>
          )}
        </div>
      </div>
    </body>
  );
}
