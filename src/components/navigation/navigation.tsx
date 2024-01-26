import classNames from 'classnames';
import styles from './navigation.module.scss';
import classes from './navigation.module.css';
import { NavLink } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconHome, IconMatchstick, IconLogout, IconAtom2, IconTestPipe } from '@tabler/icons-react';

export interface NavigationProps {
    className?: string;
    routes?: {
        path: string;
    }[];
}

const data = [
    { link: '/', label: 'Home', icon: IconHome },
    { link: '/MatchupInfo', label: 'MatchupInfo', icon: IconMatchstick },
    { link: '/Test', label: 'Test', icon: IconTestPipe },
];

export const Navigation = ({ className, routes }: NavigationProps) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    const links = data.map((item) => (
        <NavLink
            key={item.link}
            className={classes.link}
            label={item.label}
            leftSection={<item.icon className={classes.linkIcon} stroke={1.5} />}
            active={active === item.link}
            component={Link}
            to={item.link}
        />));

    return (
        <>
            <nav className={classes.navbar}>
                <div className={classes.navbarMain}>{links}</div>

                <div className={classes.footer}>
                    <a
                        href="#"
                        className={classNames(classes.link, styles.active)}
                        onClick={(event) => event.preventDefault()}
                    >
                        <IconLogout className={classes.linkIcon} stroke={1.5} />
                        <span>Logout</span>
                    </a>
                    <NavLink
                        component={Link}
                        to='/Profile'
                        className={classes.link}
                        label='Profile'
                        active={active === '/Profile'}
                        leftSection={<IconAtom2 />}
                    />
                </div>
            </nav>
        </>
    );
};