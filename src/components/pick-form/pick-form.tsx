import { MatchupType, PickType, ScoreboardType, Teams } from '~/types';
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
import {
    deletePickHelper,
    getMyPickByMatchup,
    upsertPickHelper,
} from '~/middleware/helpers/PicksHelpers';
import { currentUserSignal } from '~/middleware/signals/AuthSignals';

export type PickFormProps = {
    className?: string;
    matchup: MatchupType;
    scoreboard: ScoreboardType | null;
    showTitle?: boolean;
};

const maxCommentLength = 50;
const submittingSignal = signal(false);
const currentPickSignal = signal<PickType | null>(null);

export const PickForm = ({ className, matchup, showTitle }: PickFormProps) => {
    useSignals();
    if (!matchup.away_team_tricode || !matchup.home_team_tricode) {
        console.error('PickForm missing matchup tricode', matchup);
        return <>Error</>;
    }

    useSignalEffect(() => {
        if (currentUserSignal.value) {
            getMyPickByMatchup(currentUserSignal.value.id, matchup.game_id)
                .then((pick: PickType) => {
                    currentPickSignal.value = pick;
                    form.setValues({
                        pick: pick.winner,
                        comment: pick.comment,
                    });
                    console.log('Got pick', pick);
                })
                .catch((e) => {
                    console.error('Error getting pick', e);
                    currentPickSignal.value = null;
                });
        }
    });

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

    const handleFormSubmit = async () => {
        console.log('Form values', form.values);
        if (!currentUserSignal.value) {
            console.error('User not logged in');
            return;
        }

        submittingSignal.value = true;
        if (form.values.pick === 'na') {
            console.log('Delete pick');
            await deletePickHelper(currentUserSignal.value.id, matchup.game_id);
            submittingSignal.value = false;
            return;
        }

        if (currentPickSignal.value) {
            console.log('update pick', form.values);
            await upsertPickHelper({
                ...currentPickSignal.value,
                updated_at: new Date().toISOString(),
                winner: form.values.pick,
                comment: form.values.comment,
            });
            submittingSignal.value = false;
            return;
        }

        console.log('insert pick', form.values);
        const tstamp = new Date().toISOString();
        const { error } = await upsertPickHelper({
            user_id: currentUserSignal.value.id,
            matchup_id: matchup.game_id,
            parlay_id: null,
            created_at: tstamp,
            updated_at: tstamp,
            winner: form.values.pick,
            comment: form.values.comment,
        });
        if (error) {
            console.error('Error upserting pick', error);
            submittingSignal.value = false;
            return;
        }
        currentPickSignal.value = await getMyPickByMatchup(
            currentUserSignal.value.id,
            matchup.game_id
        );
        submittingSignal.value = false;
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
                        disabled={submittingSignal.value}
                        radius='md'
                        size='xl'
                        data={[
                            {
                                value: matchup.away_team_tricode,
                                label: (
                                    <Center>
                                        <TeamLogo team={matchup.away_team_tricode} size={60} />
                                    </Center>
                                ),
                            },
                            { value: 'na', label: <Space h={60} w={0} /> },
                            {
                                value: matchup.home_team_tricode,
                                label: (
                                    <Center>
                                        <TeamLogo team={matchup.home_team_tricode} size={60} />
                                    </Center>
                                ),
                            },
                        ]}
                        value={form.values.pick}
                        onChange={(value) => {
                            form.setFieldValue('pick', value);
                        }}
                    />

                    <Textarea
                        {...form.getInputProps('comment')}
                        disabled={submittingSignal.value}
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
                                    disabled={submittingSignal.value}
                                    radius='md'
                                    size='md'
                                    variant='gradient'
                                    gradient={{ from: 'blue', to: 'grape', deg: 90 }}
                                    w='100%'
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
