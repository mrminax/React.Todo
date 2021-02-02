import React from 'react';
import styles from './CreateIn.module.css'
import schoolLogo from '../../images/WHS.png'

function CreateIn() {
    return (
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                ВЫПОЛНЕНО В
            </p>
            <a
                href='https://webheroschool.ru/'
                target='__blank'
                rel='noopener noreferer'
            >
                <img className={styles.created_img} src={schoolLogo} alt='schoolLogo'></img>
            </a>
        </footer>
    )
}

export default CreateIn;