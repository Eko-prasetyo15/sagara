import React from "react";
import PropTypes from "prop-types";
import Header from "./Headers"
import 'bootstrap/dist/css/bootstrap.min.css';

const propTypes = {
    children: PropTypes.node.isRequired,
};

const defaultProps = {};

export default function Component(props) {
    const { children } = props;

    return (
        <>
            <div className="container py-3" style={{ height: '100vh' }}>
                <Header />
                <div className="wrapper mt-3">{children}</div>
            </div>
        </>
    );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;
