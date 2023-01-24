import PropTypes from "prop-types";

export default function Header(props) {
  return <h1 className="rounded bg-blue">{props.text}</h1>;
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
