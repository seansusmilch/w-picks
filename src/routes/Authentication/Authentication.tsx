import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { signUpNewUser, logInUser } from '~/middleware/supabase/auth';
import { useSignal } from '@preact/signals-react';
import {
    Center,
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Anchor,
    Stack,
    Alert,
    Flex,
    rem,
} from '@mantine/core';
import { IconMoodSadSquint, IconCircleCheck } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useSignals } from '@preact/signals-react/runtime';
import { HandleLogin } from '~/middleware/helpers/AuthHelpers';

export function AuthenticationForm(props: PaperProps) {
    useSignals();
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

    const errorSignal = useSignal<{ name: string; message: string } | null>(null);
    const successSignal = useSignal<{ name: string; message: string } | null>(null);

    const handleSubmit = async () => {
        if (type === 'register') {
            const { error } = await signUpNewUser(form.values);
            if (error) {
                console.log('Registration error', error);
                error.name = 'Sign Up Error';
                errorSignal.value = error;
                return;
            }

            if (type === 'register') toggleType();
            errorSignal.value = null;
            successSignal.value = {
                name: 'Sign Up Successful',
                message: 'Please confirm email address',
            };
        }
        if (type === 'login') {
            const { error } = await HandleLogin(form.values.email, form.values.password);
            if (error) {
                errorSignal.value = error;
                return;
            }
            console.log('Logged in!');
            navigate('/Profile');
        }
    };

    return (
        <Center h='100%' w='100%'>
            <Flex direction='column'>
                <Paper miw='360px' radius='md' p='xl' withBorder {...props}>
                    <Text size='lg' mb='lg' fw={700}>
                        Welcome to W Picks, {type} with
                    </Text>

                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <Stack>
                            {type === 'register' && (
                                <TextInput
                                    label='Display Name'
                                    placeholder='Your name'
                                    value={form.values.display_name}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'display_name',
                                            event.currentTarget.value
                                        )
                                    }
                                    radius='md'
                                />
                            )}

                            <TextInput
                                required
                                label='Email'
                                placeholder='hello@mantine.dev'
                                value={form.values.email}
                                onChange={(event) =>
                                    form.setFieldValue('email', event.currentTarget.value)
                                }
                                error={form.errors.email && 'Invalid email'}
                                radius='md'
                            />

                            <PasswordInput
                                required
                                label='Password'
                                placeholder='Your password'
                                value={form.values.password}
                                onChange={(event) =>
                                    form.setFieldValue('password', event.currentTarget.value)
                                }
                                error={
                                    form.errors.password &&
                                    'Password should include at least 6 characters'
                                }
                                radius='md'
                            />
                        </Stack>

                        <Group justify='space-between' mt='xl'>
                            <Anchor
                                component='button'
                                type='button'
                                c='dimmed'
                                onClick={() => toggleType()}
                                size='xs'
                            >
                                {type === 'register'
                                    ? 'Already have an account? Login'
                                    : "Don't have an account? Register"}
                            </Anchor>
                            <Button type='submit'>{upperFirst(type)}</Button>
                        </Group>
                    </form>
                </Paper>

                {errorSignal.value ? (
                    <Alert
                        mt='xl'
                        color='red'
                        radius='md'
                        title={errorSignal.value.name}
                        icon={<IconMoodSadSquint style={{ width: rem(20), height: rem(20) }} />}
                    >
                        {errorSignal.value.message}
                    </Alert>
                ) : (
                    <></>
                )}
                {successSignal.value ? (
                    <Alert
                        mt='xl'
                        color='green'
                        radius='md'
                        title={successSignal.value.name}
                        icon={<IconCircleCheck style={{ width: rem(20), height: rem(20) }} />}
                    >
                        {successSignal.value.message}
                    </Alert>
                ) : (
                    <></>
                )}
            </Flex>
        </Center>
    );
}
