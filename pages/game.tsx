import { StyledBlock } from ".";
import { css } from '@emotion/css'
import styled from '@emotion/styled'
import { ListItems } from "./components/ListItems";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import React from 'react'
import { OneItem } from "./components/OneItem";


const StMenuItem = styled.div`
width: 131px;
height: 131px;
background-color: rgba(0, 0, 0, 0.06);
box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
border-radius: 50%;

& + & {
    margin-left: 4px;
}
` 

const StInDep = styled.div`
font-size: 42px;
color: #fff;
text-align: center;
border: 1px solid #fff;
padding: 20px;
margin: 20px;
`

type TypeAllPoints = {
    number?: number;
    id: number;
    ok?: boolean;
}



export default function Game () {

    const router = useRouter()
    const {sort, count, values} = router.query

    const [allNumbers, setAllNumbers] = useState<number[]>([])
    const [allPoints, setAllPoints] = useState<TypeAllPoints[]>([])
    const [imageN, setImageN] = useState(1)

    const allValues = [0, 0, 9, 19, 50, 99, 999]


    const generateRandomEl = (): number => {
        const min = 1;
        const max = 3;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    useEffect(() => {

        let anyMassive = []
        for (let i = 0; i < +count!; i++) {
            anyMassive.push({id: i, number: allNumbers[i], ok: false})
        }

        setAllPoints(anyMassive)
        setImageN(generateRandomEl())
    }, [allNumbers])

    return (
        <>
        <Head>
            <title>Играем</title>
        </Head>
        {
            +values! != 1
            ?
            <StyledBlock>
            <div
                className={css`
                    width: 980px;
                    height: 810px;
                    display: flex;
                    justify-content: center;
                    
                    background-image: var(--bg${imageN});
                    background-size: cover;
                    background-repeat: no-repeat;
                    position: relative;
                `}
            >
        
            <ListItems
                count={+count!}
                values={+values!}
                setAllNumbers={setAllNumbers}
                imageN={imageN}
            />

            <div className={css`
                width: 890px;
                height: 223px;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: var(--menu${imageN});
                position: absolute;
                bottom: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            `}
            >
                    <OneItem
                        number={allValues[+values!]}
                        imageN={imageN}
                        forMenu
                    />
                    {allPoints.map(point => 
                        <React.Fragment key={point.id}>
                            {point.ok
                            ?
                            <OneItem
                                number={point.number}
                                forMenu
                            />
                            :
                            <StMenuItem 
                            />
                            }
                        </React.Fragment>
                    )}
            </div>


            </div>
        </StyledBlock>

        :
        <StInDep> В разработке... Попробуйте с числами</StInDep>
        }
        </>
    )
}
