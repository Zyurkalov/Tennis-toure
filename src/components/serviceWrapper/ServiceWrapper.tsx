// import React from 'react'
import useScreenStyle from '../../utilits/hooks/useScreenStyle';
import { Outlet } from 'react-router';
import clsx from 'clsx';
import styles from './serviceWrapper.module.scss';

export default function ServiceWrap() {
    return (
        <>
            <section
                className={clsx(styles.wrap, useScreenStyle(styles, 'wrap'))}
            >
                <div></div>
                <Outlet />
            </section>
            {/* <h1>Сервисы</h1> */}
        </>
    );
}
