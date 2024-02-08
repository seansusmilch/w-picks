import {
    ActionIcon,
    useMantineColorScheme,
    useComputedColorScheme,
    ActionIconProps,
} from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classNames from 'classnames';
import classes from './theme-switcher.module.css';

export function ThemeSwitcher(props: ActionIconProps) {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    return (
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant='default'
            radius='md'
            size='xl'
            aria-label='Toggle color scheme'
            {...props}
        >
            <IconSun className={classNames(classes.icon, classes.light)} stroke={1.5} />
            <IconMoon className={classNames(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
    );
}
