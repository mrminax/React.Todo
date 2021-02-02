import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import styles from "./Footer.module.css";
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({ activeItemCount, onClickClearCompleted }) => (
    <div className={styles.footer}>
        <span className={
            classnames({
                [styles.footer__countActive]: true,
                [styles.footer__countActiveAllDone]: !activeItemCount
            })}>
            {activeItemCount ? `Осталось выполнить: ${activeItemCount}` : 'Все задачи выполнены!'}
        </span>

        <div className={styles.footer__clearCompleted}>
            <Button
                size="small"
                startIcon={<DeleteIcon />}
                onClick={onClickClearCompleted}
            >
                Очистить завершенные
            </Button>
        </div>
    </div>
);

Footer.propTypes = {
    activeItemCount: PropTypes.number
};

Footer.defaultProps = {
    activeItemCount: 0
};

export default Footer;