import React from 'react';
import Container from '@material-ui/core/Container';
import { Logo } from '../logo';

import './header.scss';

function Header() {
    return (
        <header className="header">
            <Container>
                <Logo />
            </Container>
        </header>
    );
}

export { Header };
