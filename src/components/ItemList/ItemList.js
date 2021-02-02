import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

export default function ItemList({ items, onClickDone, onClickDelete }) {
    return (
        <List dense>
            {items.map(item => (
                <Item
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    isDone={item.isDone}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                />
            ))}
        </List>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
};