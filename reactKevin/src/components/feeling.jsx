import PropTypes from "prop-types";

export default function Feeling(props) {
  console.log(props.text);
  return <h1 className="rounded bg-blue">{props.text}</h1>;
}

Feeling.propTypes = {
  text: PropTypes.string.isRequired,
};
