import {
  faStethoscope,
  faCommentDots,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const FooterQuickLinks = () => {
  return (
    <ul className="list-unstyled">
      <li>
        <Link
          to="/home"
          style={{ textDecoration: "none" }}
          className="text-white"
        >
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/service"
          style={{ textDecoration: "none" }}
          className="text-white"
        >
          <FontAwesomeIcon icon={faPlus} /> <span>Service</span>
        </Link>
      </li>
      <li>
        <Link to="/" style={{ textDecoration: "none" }} className="text-white">
          <FontAwesomeIcon icon={faStethoscope} /> <span>Health care</span>
        </Link>
      </li>
      <li>
        <Link to="/" style={{ textDecoration: "none" }} className="text-white">
          <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
        </Link>
      </li>
    </ul>
  );
};

export default FooterQuickLinks;
