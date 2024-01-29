import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from './user-card.module.css';
import { currentUserSignal } from '~/middleware/signals/AuthSignals';
import { minidenticon } from 'minidenticons';
import { ProfileType } from '~/types';
import { upsertProfile } from '~/middleware/supabase/profiles';

export type UserCardProps = {
    profile: ProfileType;
    stats: {value: string; label: string}[];
}

export function UserCard({ profile, stats }: UserCardProps) {
    const items = stats.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    return (
        <Card withBorder padding="xl" radius="md" className={classes.card}>
            <Card.Section
                h={140}
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                }}
            />
            <Avatar
                src={profile.avatar_url || 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png'}
                bg='black'
                size={80}
                radius={80}
                mx="auto"
                mt={-30}
                className={classes.avatar}
            />
            <Text ta="center" fz="lg" fw={500} mt="sm">
                {profile.display_name}
            </Text>
            <Text ta="center" fz="sm" c="dimmed">
                Pro gambler
            </Text>
            <Group mt="md" justify="center" gap={30}>
                {items}
            </Group>
            <Button fullWidth radius="md" mt="xl" size="md" variant="default">
                Edit Profile
            </Button>
        </Card>
    );
}
