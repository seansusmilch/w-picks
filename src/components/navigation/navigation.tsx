import classNames from 'classnames';
import styles from './navigation.module.scss';
import classes from './navigation.module.css';
import { NavLink, Stack, Image, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IconHome, IconAtom2, IconTestPipe, IconLogin, IconCalendar } from '@tabler/icons-react';
import * as AuthSignals from '~/middleware/signals/AuthSignals';
import { useSignals } from '@preact/signals-react/runtime';
import BrandLogo from '~/assets/brand/logo-hires-uncropped.webp'
export interface NavigationProps {
    className?: string;
    routes?: {
        path: string;
    }[];
    isLoggedIn?: boolean;
}

const data = [
    { link: '/', label: 'Home', icon: IconHome },
    { link: '/Today', label: 'Today', icon: IconCalendar },
    { link: '/Test', label: 'Test', icon: IconTestPipe },
];

export const Navigation = ({ className, routes }: NavigationProps) => {
    useSignals();

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
        />
    ));

    return (
        <>
            <nav className={classes.navbar}>
                <Stack className={classes.navbarMain}>
                    <Group className={classes.header} p='lg' justify='center'>
                        <Image src={BrandLogo} maw='250px' radius='xl'/>
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
                            active={active === '/Profile'}
                            leftSection={<IconAtom2 />}
                        />
                    ) : (
                        <NavLink
                            component={Link}
                            to="/Login"
                            className={classes.link}
                            label="Login/Signup"
                            active={true}
                            leftSection={<IconLogin />}
                        />
                    )}

                    <NavLink
                        component={Link}
                        to="/Test"
                        className={classes.link}
                        label={AuthSignals.testSignal.value}
                        active={active === '/Test'}
                        leftSection={<IconTestPipe />}
                        />
                </Stack>
            </nav>
        </>
    );
};
