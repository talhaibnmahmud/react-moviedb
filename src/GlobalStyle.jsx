import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #ffffff;
        --lightGrey: #eeeeee;
        --midGrey: #353535;
        --darkGrey: #1c1c1c;
        --font-xl: 2.5rem;
        --font-lg: 1.5rem;
        --font-md: 1.2rem;
        --font-base: 1rem;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
    }

    h3 {
        font-size: var(--font-md);
        font-weight: 600;
    }

    p {
        font-size: var(--font-base);
        color: var(--white);
    }
`;

export default GlobalStyle;
