import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
    // Wrapping all styles in a component allows easy access to the rest of the project without having to import each item (eg styles, animation, effects)

    background: linear-gradient(to right, #000046, #1CB5E0);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
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

