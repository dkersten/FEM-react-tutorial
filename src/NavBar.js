import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './Colors';

const spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const NavBar = () => {

    return(
        <header
        css={css`
            background-color: ${colors.primary};
            padding: 15px;
            margin-bottom: 1rem;
            border-radius: 0 0 5px 10px;
        `}
    >
        <Link to="/">Adopt Me!</Link>
        <span
        css={css`
            font-size: 3rem;
            display: inline-block;

            &:hover {
                text-decoration: underline;
                animation: 1s ${spin} linear infinite;
            }
        `}
        role="img" aria-label="logo">⚔️</span>
    </header>
    )
}

export default NavBar