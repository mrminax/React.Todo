import React from 'react';
import { MailOutline as MailOutlineIcon, GitHub as GitHubIcon } from '@material-ui/icons';
import styles from "./Contacts.module.css";

function Contacts() {
    return (
        <div className={styles.contacts}>
            <h1>
                Контакты
            </h1>
            <div className={styles.contactsList}>
                <a
                    href="mailto: art.minax@gmail.com"
                    target="__blank"
                    rel='noopener noreferrer'
                >
                    <MailOutlineIcon style={{ fontSize: 36 }} name='email' />
                </a>
                <a
                    href="https://github.com/mrminax"
                    target="__blank"
                    rel='noopener noreferrer'
                >
                    <GitHubIcon style={{ fontSize: 36 }} name='email' />
                </a>
            </div>
        </div>
    );
};

export default Contacts;