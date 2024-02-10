import { MatchupType, ScoreboardType, Teams } from '~/types';
import {
    Flex,
    SegmentedControl,
    Space,
    Center,
    ActionIcon,
    Textarea,
    Title,
    Button,
    Grid,
} from '@mantine/core';
import { signal, useSignalEffect } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { IconQuestionMark } from '@tabler/icons-react';
import { TeamLogo } from '~/components/team-logo/team-logo';
import { PickHelp } from './pick-help';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

export type PickFormProps = {
    className?: string;
    matchup: MatchupType;
    scoreboard: ScoreboardType | null;
    showTitle?: boolean;
};

const maxCommentLength = 50;
const errorSignal = signal<string | null>(null);

export const PickForm = ({ className, matchup, showTitle }: PickFormProps) => {
    useSignals();
    if (!matchup.away_team_tricode || !matchup.home_team_tricode) {
        console.error('PickForm missing matchup tricode', matchup);
        return <>Error</>;
    }

    const [opened, { open, close }] = useDisclosure();
    const form = useForm({
        initialValues: {
            comment: '',
            pick: 'na',
        },
        validate: {
            comment: (val) =>
                val.trim().length <= maxCommentLength
                    ? null
                    : `Comment exceeds max of ${maxCommentLength} characters by ${
                          val.trim().length - maxCommentLength
                      }`,
        },
    });

    const homeTeamName = Teams[matchup.home_team_tricode].name;
    const awayTeamName = Teams[matchup.away_team_tricode].name;

    const handleFormSubmit = async (vals: any) => {
        console.log('pick form', vals);
    };

    return (
        <>
            <PickHelp opened={opened} onClose={close} />
            <form onSubmit={form.onSubmit(handleFormSubmit)}>
                <Flex direction='column' align='center' gap='md'>
                    <Title order={3} ta='center'>
                        Your Pick
                    </Title>
                    {showTitle && (
                        <Title order={2} ta='center'>
                            {awayTeamName} v {homeTeamName}
                        </Title>
                    )}

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
                            form.setFieldValue('pick', value);
                        }}
                    />

                    <Textarea
                        {...form.getInputProps('comment')}
                        radius='md'
                        size='lg'
                        w='100%'
                        label='Comment'
                        description='Short comment about your pick'
                        placeholder='I think the away team will win because...'
                    />
                    <Grid w='100%'>
                        <Grid.Col span='content'>
                            <Flex justify='flex-start'>
                                <ActionIcon
                                    variant='default'
                                    radius='md'
                                    size='xl'
                                    aria-label='Toggle color scheme'
                                >
                                    <IconQuestionMark stroke={1.5} onClick={open} />
                                </ActionIcon>
                            </Flex>
                        </Grid.Col>
                        <Grid.Col span='auto'>
                            <Flex justify='flex-end'>
                                <Button
                                    type='submit'
                                    radius='md'
                                    size='md'
                                    variant='gradient'
                                    gradient={{ from: 'blue', to: 'grape', deg: 90 }}
                                    w='100%'
                                    onClick={() => {
                                        console.log('submit');
                                    }}
                                >
                                    Save
                                </Button>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                </Flex>
            </form>
        </>
    );
};
