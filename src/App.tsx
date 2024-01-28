import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Outlet } from 'react-router-dom';
import { AppShell, Burger, Flex, Grid, Title, Image } from '@mantine/core';
import { useDisclosure, useClickOutside } from '@mantine/hooks';
import { Navigation } from 'components/navigation/navigation';
import BrandLogo from '~/assets/brand/logo-hires-uncropped.webp';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';
import { useSignals } from '@preact/signals-react/runtime';

export default function App() {
    useSignals();
    const [opened, { toggle }] = useDisclosure();
    const clickOutside = useClickOutside(() => opened && toggle());

    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Grid grow overflow="hidden" h={60}>
                        <Grid.Col span={7}>
                            <Flex
                                h={60}
                                gap="md"
                                justify="flex-start"
                                align="center"
                                direction="row"
                                wrap="nowrap"
                                px="sm"
                            >
                                <Image src={BrandLogo} mah="48px" radius="md" />
                                <Title order={2}>W Picks</Title>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Flex h={60} direction="row" px="sm" justify="flex-end" align="center">
                                <Burger
                                    opened={opened}
                                    onClick={toggle}
                                    hiddenFrom="sm"
                                    size="md"
                                />
                                <ThemeSwitcher visibleFrom="sm" />
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </AppShell.Header>

                <AppShell.Navbar p="0">
                    <Navigation opened={opened} toggleMethod={toggle} clickOutside={clickOutside}/>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
