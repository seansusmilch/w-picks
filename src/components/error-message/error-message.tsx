import { Paper, Title, Text, Container, Image, MantineProvider, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconHome } from '@tabler/icons-react';

export type ErrorMessageProps = {
    title: string;
    message: string;
    returnTo: string;
    icon: JSX.Element;
    btnLabel: string;
};

const imgs = [
    'https://media.tenor.com/-iiMZcIHkE8AAAAM/sad-emoji.gif',
    'https://jfmcdonaldjr.files.wordpress.com/2017/01/related-pictures-sad-face-caption-character-meme-generator-clipart.jpg',
    'https://assets-global.website-files.com/646218c67da47160c64a84d5/6463416e5116c668dfb62cb2_19.png',
    'https://media.tenor.com/ZuIi8_mAm74AAAAM/scared-concerned.gif',
    'https://assets-global.website-files.com/646218c67da47160c64a84d5/64faebcc5b9290da561ec21f_93.png',
    'https://i.kym-cdn.com/photos/images/original/002/369/918/dee.gif',
    'https://thumbs.dreamstime.com/b/worry-emoticon-worried-sad-emoji-resting-his-face-hand-looking-up-203072148.jpg',
];

export const ErrorMessage = ({ title, message, returnTo, icon, btnLabel }: ErrorMessageProps) => {
    const img = imgs[Math.floor(Math.random() * imgs.length)];
    return (
        <Paper ta='center' p='md' shadow='xl'>
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
    );
};

ErrorMessage.defaultProps = {
    title: 'Oops! Something went wrong.',
    message: "We're sorry for the inconvenience. Please try again later.",
    returnTo: '/',
    icon: <IconHome />,
    btnLabel: 'Go Home',
};
