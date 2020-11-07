import React, {useCallback} from "react";
import styles from "./styles.module.scss"
import {useField} from "formik";

const Input = (props) => {
  const [field] = useField(props.name);
  const onChange = useCallback((e) => {
    field.onChange({target: {value: e.target.value, name: e.target.name}});
  }, [field]);
  return (
    <div className={styles.input}>
      {props.label && <p className={styles.input__label}>{props.label}</p>}
      <input
        className={styles.input__field}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        onChange={props.onChange ?? onChange}
        name={props.name}
        disabled={props.disabled}
        value={props.value ?? field.value}
        {...props}
      />
    </div>
  )
}

export default Input;