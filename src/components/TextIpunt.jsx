import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ id, value, setValue, label }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
