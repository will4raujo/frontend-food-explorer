import { createGlobalStyle } from "styled-components";
import 'toastr/build/toastr.min.css';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({ theme}) => theme.COLORS.Dark_400};
        font-family: ${({ theme }) => theme.FONTS.Roboto};
        color: ${({ theme }) => theme.COLORS.Light_100};
    }
`