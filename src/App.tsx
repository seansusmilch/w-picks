import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Outlet } from 'react-router-dom';
import { AppShell, Burger, Flex, Grid, Code, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navigation } from 'components/navigation/navigation';


export default function App() {
    const [opened, { toggle }] = useDisclosure();

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
                        <Grid.Col span={9}>
                            <Flex
                                h={60}
                                gap="md"
                                justify="flex-start"
                                align="center"
                                direction="row"
                                wrap="nowrap"
                                ml={{ xs: 0, sm: 'lg' }}
                            >
                                <Burger
                                    opened={opened}
                                    onClick={toggle}
                                    hiddenFrom="sm"
                                    ml="sm"
                                    size="md"
                                />
                                <Title order={2}>W Picks</Title>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Flex h={60} justify='flex-end' align='center' hiddenFrom='xs'>
                                <Code mr='sm' fw={700}>v0.0.1</Code>
                            </Flex>
                            
                        </Grid.Col>
                    </Grid>
                </AppShell.Header>

                <AppShell.Navbar p="0">
                    <Navigation />
                </AppShell.Navbar>

                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}
