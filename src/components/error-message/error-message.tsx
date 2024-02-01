import { Paper, Title, Text, Container, Image, MantineProvider, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useSignal, useSignalEffect } from '@preact/signals-react';
import { IconHome } from '@tabler/icons-react';
import { lazy } from 'react';
import Emoji1 from '~/assets/emojis/emoji1.png';
import Emoji2 from '~/assets/emojis/emoji2.gif';
import Emoji3 from '~/assets/emojis/emoji3.gif';
import Emoji4 from '~/assets/emojis/emoji4.png';
import Emoji5 from '~/assets/emojis/emoji5.gif';
import Emoji6 from '~/assets/emojis/emoji6.jpg';

export type ErrorMessageProps = {
    title: string;
    message: string;
    returnTo: string;
    icon: JSX.Element;
    btnLabel: string;
};

// const imgs = [
//     'https://media.tenor.com/-iiMZcIHkE8AAAAM/sad-emoji.gif',
//     'https://jfmcdonaldjr.files.wordpress.com/2017/01/related-pictures-sad-face-caption-character-meme-generator-clipart.jpg',
//     'https://assets-global.website-files.com/646218c67da47160c64a84d5/6463416e5116c668dfb62cb2_19.png',
//     'https://media.tenor.com/ZuIi8_mAm74AAAAM/scared-concerned.gif',
//     'https://assets-global.website-files.com/646218c67da47160c64a84d5/64faebcc5b9290da561ec21f_93.png',
//     'https://i.kym-cdn.com/photos/images/original/002/369/918/dee.gif',
// ];

// const imgs = [
//     '~/assets/emojis/emoji1.png',
//     '~/assets/emojis/emoji2.gif',
//     '~/assets/emojis/emoji3.gif',
//     '~/assets/emojis/emoji4.png',
//     '~/assets/emojis/emoji5.gif',
//     '~/assets/emojis/emoji6.jpg',
// ];

const imgs = [Emoji1, Emoji2, Emoji3, Emoji4, Emoji5, Emoji6];

export const ErrorMessage = ({ title, message, returnTo, icon, btnLabel }: ErrorMessageProps) => {
    const img = imgs[Math.floor(Math.random() * imgs.length)];

    return (
        <Container size='md' mt='lg'>
            <Paper ta='center' maw='888px' p='md' shadow='xl'>
                <Title ta='center' order={1}>
                    {title}
                </Title>
                <Text ta='center' mt='md'>
                    {message}
                </Text>

                <Button component={Link} to={returnTo} leftSection={icon} mt='xl' variant='light'>
                    {btnLabel}
                </Button>

                <Image
                    src={img}
                    alt='Error image'
                    mt='xl'
                    display='block'
                    style={{ borderRadius: '20px' }}
                />
            </Paper>
        </Container>
    );
};

ErrorMessage.defaultProps = {
    title: 'Oops! Something went wrong.',
    message: "We're sorry for the inconvenience. Please try again later.",
    returnTo: '/',
    icon: <IconHome />,
    btnLabel: 'Go Home',
};
