import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
        const { id, value, isDone, onClickDone, onClickDelete } = this.props;

        return (
            <div className={styles.todo__item}>
                <ListItem onClick={() => onClickDone(id)} button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={isDone}
                            onClick={() => onClickDone(id)}
                        />
                    </ListItemIcon>
                    <ListItemText className={
                        classnames({
                            [styles.todo__itemText]: true,
                            [styles.todo__itemText_done]: isDone
                        })
                    } id={id} primary={value} />
                    <ListItemSecondaryAction>
                        <span className={styles.item__deleteButton}>
                            <DeleteIcon onClick={() => onClickDelete(id)} />
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    };
};

Item.defaultProps = {
    isDone: true
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
};

export default Item;