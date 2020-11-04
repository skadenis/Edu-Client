import React, {useCallback} from "react";
import {useField} from "formik";
import styles from "./styles.module.scss";

const Select = (props) => {
  const [field] = useField(props.name);
  const onChange = useCallback((e) => {
    field.onChange({target: {value: e.target.value, name: e.target.name}});
  }, [field]);
  return (
    <select
      onChange={props.onChange ?? onChange}
      name={props.name}
      disabled={props.disabled}
      value={props.value ?? field.value}
      className={styles.select}
    >
      {props.options.map(option => {
        return (
          <option value={option.value} key={option.value}>{option.label}</option>
        )
      })}
    </select>
  )
}

export default Select;