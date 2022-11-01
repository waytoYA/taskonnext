import { css } from '@emotion/css'

export const InputSettingsCount = ({setCount}: any) => {

    return (
        <>
            <div className={css`
                width: 366px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-left: 147px;

                li {
                  font-family: 'Calibri';
                  font-weight: 700;
                  font-size: 24px;
                  line-height: 29px;
                  color: #4F4B61;
                }
            `}>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </div>
            <input 
                type="range" 
                min= "2" 
                max="5" 
                step="1"
                defaultValue="1"
                onChange={(e) => setCount(+e.target.value)}
                className={css`

                & {
                    -webkit-appearance: none;
                    width: 366px;
                    position: relative;
                  
                    &:focus {
                      outline: none;

                    }
                    &:before {
                      position: absolute;
                      content: "";
                      height: 5px;
                      background: #7e8bc6;
                    }
                  }
                  
                  &::-webkit-slider-runnable-track {
                    background: #FFD748;
                    border-radius: 10px;
                    height: 21px;
                  }
                  
                  &::-webkit-slider-thumb {
                    width: 23px;
                    height: 23px;
                    border-radius: 100%;
                    border: none;
                    -webkit-appearance: none;
                    background-color: #104987;
                    margin-top: -1px;
                    z-index: 99;
                    position: relative;
                    cursor: pointer;
                  }
                `}
            />

        </>

    )
}