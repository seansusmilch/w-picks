// TODO: Probably dont need this component, see Authentication.tsx

import { PasswordInput, Text, Group, Anchor, Tooltip} from '@mantine/core';
import { useState, useEffect } from 'react';

const requiredLength = 6;

export function ForgotPasswordInput() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [password, setPassword] = useState('');
    const vaildPassword = password.length >= requiredLength;

    return (
        <>
            <Group justify="space-between" mb={5}>
                <Text component="label" htmlFor="your-password" size="sm" fw={500}>
                    Your password
                </Text>

                <Anchor
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    pt={2}
                    fw={500}
                    fz="xs"
                >
                    Forgot your password?
                </Anchor>
            </Group>
            <PasswordInput placeholder="Your password" id="your-password" />
        </>
    );
}
