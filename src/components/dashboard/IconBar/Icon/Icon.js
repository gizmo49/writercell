import React from "react";
import PropTypes from "prop-types";
import "./Icon.css";

const Icon = ({name}) => (<i className={`wittericon ${name}`}></i>);

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;