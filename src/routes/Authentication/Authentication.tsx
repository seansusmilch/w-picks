import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { signUpNewUser, logInUser } from '~/middleware/supabase/auth';
import {
    Center,
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import * as Auth from '~/middleware/signals/AuthSignals';
import { useNavigate } from 'react-router-dom';

export function AuthenticationForm(props: PaperProps) {
    const navigate = useNavigate();
    const [type, toggleType] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            display_name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length <= 6 ? 'Password should include at least 6 characters' : null,
        },
    });

    const handleSubmit = async () => {
        if (type === 'register') {
            signUpNewUser(form.values);
        }
        if (type === 'login') {
            
            const {user, session, error} = await logInUser(form.values.email, form.values.password);
            if (error) {
                console.log('error', error);
            }
            console.log('logIn', user, session);
            Auth.currentSessionSignal.value = session;
            Auth.currentUserSignal.value = user;

            console.log('Logged in!')
            navigate('/');
        }

    };

    return (
        <Center h='100%'>
            <Paper maw={500} radius="md" p="xl" withBorder {...props}>
                <Text size="lg" fw={500}>
                    Welcome to W Picks, {type} with
                </Text>

                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                label="Display Name"
                                placeholder="Your name"
                                value={form.values.display_name}
                                onChange={(event) =>
                                    form.setFieldValue('display_name', event.currentTarget.value)
                                }
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) =>
                                form.setFieldValue('email', event.currentTarget.value)
                            }
                            error={form.errors.email && 'Invalid email'}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) =>
                                form.setFieldValue('password', event.currentTarget.value)
                            }
                            error={
                                form.errors.password &&
                                'Password should include at least 6 characters'
                            }
                            radius="md"
                        />
                    </Stack>

                    <Group justify="space-between" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            c="dimmed"
                            onClick={() => toggleType()}
                            size="xs"
                        >
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit">{upperFirst(type)}</Button>
                    </Group>
                </form>
            </Paper>
        </Center>
    );
}
