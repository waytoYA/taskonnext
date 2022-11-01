import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'

const StItem = styled.div`
width: 157px;
height: 157px;
background-repeat: no-repeat;
`

export const OneItem = ({top, left, number, forMenu=false, imageN}: any) => {

    const generateRandomEl = (): number => {
        const min = 1;
        const max = 4;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <StItem className={css`
            position: ${forMenu ? 'static' : 'absolute'};
            top: ${top}px;
            left: ${left}px;
            background-image: var(--bg${imageN}-item${generateRandomEl()});
            
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Calibri';
            font-weight: 400;
            font-size: 56px;
            line-height: 68px;
            letter-spacing: 2px;
            color: #FFFFFF;
            text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
        `}
        >{number}</StItem>
    )
}