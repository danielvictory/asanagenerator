import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

// code "exsc" : export styled component to create basic syntax of below
export const GradientBackgroundCon = styled.div`
    // Wrapping all styles in a component allows easy access to the rest of the project without having to import each item (eg styles, animation, effects)

    background: linear-gradient(to left, #f5d68e, #f2c222, #b85b5b);
    background-size: 300% 300%;
    animation: gradient 10s ease infinite;
    height: 100vh;
    width: 100vw;

    // The background is oversized and will gradient between two colors (above) - by adding the animation below, the background will shift the gradient back and forth
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const BackgroundImage1 = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 25px;
  margin-top: 25px;
`;

export const BackgroundImage2 = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 25px;
  bottom: 25px;
`;

export const FooterCont = styled.div`
    width: 100vw;
    height: 50px;
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    color: white;
    z-index: 99999;
  
`;

export const RedSpan = styled.span`
    color: red;
`;

export const FooterLink = styled(Link)`
    color: white;
`;