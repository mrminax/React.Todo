import React from 'react';
import styles from "./FilterItem.module.css";
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function FilterItem({ id, filterName, filterValue, isActive, onClickFilterChoose }) {
    return (
        <button
            value={filterValue}
            onClick={() => onClickFilterChoose(id)}
            className={
                classnames({
                    [styles.filterItem]: true,
                    [styles.filterItem_isActive]: isActive
                })
            }
        >
            { filterName}
        </button >
    );
};

FilterItem.propTypes = {
    filterName: PropTypes.string.isRequired,
    filterValue: PropTypes.string.isRequired,
};