import PropTypes from "prop-types";

export default function Button(props) {
  console.log(props.text);
  return <button className="rounded bg-blue">Add {props.text}</button>;
}

Button.propTypes = {
  text: PropTypes.number.isRequired,
};
