import classNames from 'classnames';
import styles from './navigation.module.scss';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export interface NavigationProps {
    className?: string;
    routes?: {
        path: string;
    }[];
}

export const Navigation = ({ className, routes }: NavigationProps) => {
    const navLinks = routes?.map(route => <Nav.Link key={route.path} href={route.path}>{route.path}</Nav.Link>)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">W Picks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {navLinks}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
