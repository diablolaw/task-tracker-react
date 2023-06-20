import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ open, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={open ? "red" : "green"}
          text={open ? "Close" : "Add"}
          onClick={showAddTask}
        />
      )}
    </header>
  );
};

// Header.defaultProps = {
//   title: "Task Tracker",
// };

Header.propTypes = {
  title: PropTypes.string,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
