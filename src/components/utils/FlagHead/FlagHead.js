import React from "react";
import PropTypes from "prop-types";
import "../FlagHead/FlagHead.css";

const FlagHead = ({ title, summary }) => (
    <div className="flag--head mb-5">
        <h2>{title}</h2>
        <p>{summary}</p>
    </div>
);

FlagHead.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string
};


export default FlagHead;