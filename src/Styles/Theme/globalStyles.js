import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        line-height:1.75;
        font-weight:400;
        background:${({ theme }) => theme.colors.primary.light};
        font-family:"Urbanist",sans-serif;
    }
    h1{
        font-weight:700;
    }
    h1,h2,h3,h4,h5{
        line-height:1.3;
        
    }
`;

export default GlobalStyles;
