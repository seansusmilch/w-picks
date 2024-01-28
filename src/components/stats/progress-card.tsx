import { Text, Progress, Card } from '@mantine/core';

export type ProgressCardProps = {
    label: string;
    text: string;
    value: number;
};

export function ProgressCard({ label, text, value }: ProgressCardProps) {
    return (
        <Card withBorder radius="md" padding="xl" bg="var(--mantine-color-body)">
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                {label}
            </Text>
            <Text fz="lg" fw={500}>
                {text}
            </Text>
            <Progress value={value} mt="md" size="lg" radius="xl" />
        </Card>
    );
}
