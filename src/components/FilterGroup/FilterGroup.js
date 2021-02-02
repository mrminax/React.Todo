import React from 'react';
import FilterItem from "../FilterItem/FilterItem"
import styles from "./FilterGroup.module.css"
import PropTypes from 'prop-types';

export default function FilterGroup({ filterItems, onClickFilterChoose }) {
    return (<div className={styles.filterGroup} > {
        filterItems.map(item => (
            <FilterItem key={item.id}
                id={item.id}
                filterName={item.name}
                filterValue={item.value}
                isActive={item.isActive}
                onClickFilterChoose={onClickFilterChoose}
            />
        ))} </div>
    );
};

FilterGroup.propTypes = {
    filterItems: PropTypes.array.isRequired,
};