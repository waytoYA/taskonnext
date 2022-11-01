import { css } from '@emotion/css'
import { useState } from 'react'


export const InputSettingsValues = ({setValues}: any) => {
    
    return (
        <>
              <div className={css`
                  width: 531px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-left: 70px;

                  li {
                    font-family: 'Calibri';
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #4F4B61;
                  }
              `}>
                  <li>A</li>
                  <li>9</li>
                  <li>19</li>
                  <li>50</li>
                  <li>99</li>
                  <li>999</li>
              </div>

            <input 
                type="range" 
                min= "1" 
                max="6" 
                step="1"
                defaultValue="1"
                onChange={(e) => setValues(+e.target.value)}
                className={css`

                & {
                    -webkit-appearance: none;
                    width: 531px;
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