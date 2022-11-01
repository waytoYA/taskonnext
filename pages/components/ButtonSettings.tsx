import { css } from '@emotion/css'


export const ButtonSettings = ({sort, click, children}: any) => {
    return (
        <button
            className={
            css`
            background: ${sort ? '#FFD748' : '#ffd7488f'};
            border-radius: 20px;
            border: none;
            padding: 2px 20px;
            font-family: 'Calibri';
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            color: ${sort ? '#423F45' : '#423f458f'};
            `
            }

            onClick={() => click()}
        >{children}</button>
    )
}