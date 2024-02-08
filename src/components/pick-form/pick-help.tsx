import { Modal, Title } from '@mantine/core';

export type PickHelpProps = {
    className?: string;
    opened: boolean;
    onClose: () => void;
};

export const PickHelp = ({ className, opened, onClose }: PickHelpProps) => {
    return (
        <Modal opened={opened} onClose={onClose} size='lg' radius='md' title='Picks FAQ' centered>
            <div>
                <Title order={2} size='h2'>
                    Can I delete my pick?
                </Title>
                <p>
                    Yes, you can delete your pick by selecting the middle option in between the two
                    team logos. You can delete your pick at any time before the game starts. Once
                    the game starts, you cannot change your pick.
                </p>
                <Title order={2} size='h2'>
                    How do I pick a team?
                </Title>
                <p>
                    Click on the team you think will win the game. You can change your pick at any
                    time before the game starts.
                </p>
                <Title order={2} size='h2'>
                    Can I change my pick?
                </Title>
                <p>
                    Yes, you can change your pick at any time before the game starts. Once the game
                    starts, you cannot change your pick.
                </p>
                <Title order={2} size='h2'>
                    What happens if I don't pick a team?
                </Title>
                <p>
                    If you don't pick a team, you will not receive a W or L. There is no penalty for
                    not picking for a game.
                </p>
            </div>
        </Modal>
    );
};
