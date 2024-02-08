import { MatchupType, ScoreboardType } from '~/types';
import { Flex, SegmentedControl, Space, Center, ActionIcon } from '@mantine/core';
import { signal, useSignalEffect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { IconQuestionMark } from '@tabler/icons-react';
import { TeamLogo } from '~/components/team-logo/team-logo';
import { PickHelp } from './pick-help';
import { useDisclosure } from '@mantine/hooks';

export type PickFormProps = {
    className?: string;
    matchup: MatchupType;
    scoreboard: ScoreboardType | null;
};

export const PickForm = ({ className, matchup, scoreboard }: PickFormProps) => {
    useSignals();
    const [opened, { open, close }] = useDisclosure();

    console.log('PickForm', matchup, scoreboard);
    if (!matchup.away_team_tricode || !matchup.home_team_tricode) return <>Error</>;

    return (
        <>
            <ActionIcon variant='default' radius='md' size='xl' aria-label='Toggle color scheme'>
                <IconQuestionMark stroke={1.5} onClick={open} />
            </ActionIcon>

            <PickHelp opened={opened} onClose={close} />
            <Flex direction='column' align='center'>
                <SegmentedControl
                    radius='md'
                    size='xl'
                    data={[
                        {
                            value: 'away',
                            label: (
                                <Center>
                                    <TeamLogo team={matchup.away_team_tricode} size={60} />
                                </Center>
                            ),
                        },
                        { value: 'na', label: <Space h={60} w={0} /> },
                        {
                            value: 'home',
                            label: (
                                <Center>
                                    <TeamLogo team={matchup.home_team_tricode} size={60} />
                                </Center>
                            ),
                        },
                    ]}
                    defaultValue='na'
                    onChange={(value) => {
                        console.log('value', value);
                    }}
                />
            </Flex>
        </>
    );
};
