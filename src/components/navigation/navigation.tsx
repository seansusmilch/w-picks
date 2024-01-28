import classNames from 'classnames';
import styles from './navigation.module.scss';
import classes from './navigation.module.css';
import { NavLink, Stack, Image, Group, Code } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconHome, IconAtom2, IconTestPipe, IconLogin, IconCalendar } from '@tabler/icons-react';
import * as AuthSignals from '~/middleware/signals/AuthSignals';
import { useSignals } from '@preact/signals-react/runtime';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
export interface NavigationProps {
    className?: string;
    routes?: {
        path: string;
    }[];
    isLoggedIn?: boolean;
    opened?: boolean;
    toggleMethod: () => void;
    clickOutside: React.MutableRefObject<any>;
}

export const Navigation = ({ className, routes, opened, toggleMethod }: NavigationProps) => {
    useSignals();

    const data = [
        { link: '/', label: 'Home', icon: IconHome },
        { link: '/Today', label: 'Today', icon: IconCalendar },
        { link: '/Test', label: `Test ${AuthSignals.testSignal.value}`, icon: IconTestPipe },
    ];

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    const handleClick = () => {
        if (opened) {
            toggleMethod();
        }
    }

    const links = data.map((item) => (
        <NavLink
            key={item.link}
            className={classes.link}
            label={item.label}
            onClick={handleClick}
            leftSection={<item.icon className={classes.linkIcon} stroke={1.5} />}
            active={active === item.link}
            component={Link}
            to={item.link}
        />
    ));


    return (
        <>
            <div className={classes.navbar}>
                <Stack className={classes.navbarMain}>
                    <Group className={classes.header} p='lg' justify='center'>
                        <ThemeSwitcher hiddenFrom='sm' />
                        <Code mr='sm' fw={700}>v0.0.1</Code>
                    </Group>
                    {links}
                </Stack>

                <Stack className={classes.footer}>
                    {AuthSignals.currentUserSignal.value ? (
                        <NavLink
                            component={Link}
                            to="/Profile"
                            className={classes.link}
                            label="Profile"
                            onClick={handleClick}
                            active={active === '/Profile'}
                            leftSection={<IconAtom2 />}
                        />
                    ) : (
                        <NavLink
                            component={Link}
                            to="/Login"
                            className={classes.link}
                            label="Login/Signup"
                            onClick={handleClick}
                            active={true}
                            leftSection={<IconLogin />}
                        />
                    )}
                </Stack>
            </div>
        </>
    );
};
