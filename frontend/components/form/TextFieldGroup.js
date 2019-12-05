import React from "react";

const TextFieldGroup = ({ tag, field, value, label, error, type, onChange, id, ref }) => {
  const CustomTag = tag;
  return (
    <div className="form-group">
      <label htmlFor={id} className="control-label">
        {label}
      </label>

      <CustomTag
        onChange={onChange}
        value={value}
        type={type}
        name={field}
        className="form-control"
        id={id}
        ref={ref}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

export default TextFieldGroup;
