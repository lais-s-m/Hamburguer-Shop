import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;

        font-family: 'Inter', sans-serif;
        font-style: normal;
    }

    :root {
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        --grey-600: #333333;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;
        --Negative: #E60000;
        --Warning: #FFCD07;
        --Success: #168821;
        --Information: #155BCB;
    }

    body {
        display: flex;

        justify-content: center;
        align-items: center;

        margin: 0;
    }

    button {
        cursor: pointer;
        transition: 0.5s;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`
