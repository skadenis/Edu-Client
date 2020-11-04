import React, {useCallback} from "react";
import {useField} from "formik";
import styles from "./styles.module.scss";

const Textarea = (props) => {
  const [field] = useField(props.name);
  const onChange = useCallback((e) => {
    field.onChange({target: {value: e.target.value, name: e.target.name}});
  }, [field]);
  return (
    <textarea
      placeholder={props.placeholder}
      onChange={onChange}
      name={props.name}
      disabled={props.disabled}
      value={field.value}
      cols="30" rows="10"
      className={styles.textarea}
    />
  )
}

export default Textarea;