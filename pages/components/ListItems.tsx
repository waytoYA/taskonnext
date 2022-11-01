import { css } from '@emotion/css'
import { memo, useEffect } from 'react'
import { OneItem } from './OneItem'

type IListItems = {
    count: number;
    values: number;
    setAllNumbers: ([]) => void;
    imageN?: number;
}

export const ListItems = memo(({count, values, setAllNumbers, imageN}: IListItems) => {
    
    const allValues = [0, 0, 9, 19, 50, 99, 999]
    const value = allValues[values]

    const coordItems = [
        [], // count == 0
        [], // count == 1
        // count == 2
        [
            {id: 0, top: 100, left: 350},
            {id: 1, top: 100, left: 550},
        ],
        // count == 3
        [
            {id: 0, top: 200, left: 200},
            {id: 1, top: 100, left: 400},
            {id: 2, top: 200, left: 600},
        ],
        // count == 4
        [
            {id: 0, top: 200, left: 100},
            {id: 1, top: 100, left: 300},
            {id: 2, top: 200, left: 500},
            {id: 3, top: 100, left: 700},
        ],
        // count == 5
        [
            {id: 0, top: 200, left: 100},
            {id: 1, top: 100, left: 250},
            {id: 2, top: 200, left: 400},
            {id: 3, top: 100, left: 550},
            {id: 4, top: 200, left: 700},
        ],
    ]

    const randomValues: number[] = []

    const generateRandomEl = (): number => {
        let max = value;

        let randomEl = Math.floor(Math.random() * (max + 1));

        if (!randomValues.includes(randomEl)){
            return randomEl
        }

        return generateRandomEl()
    }

    for (let i = 0; i < count; i++) {
        randomValues.push(generateRandomEl())
    }

    useEffect(() => {
        setAllNumbers(randomValues)
    }, [count])

    return (
        <div className={css`
            display: contents;
            position: relative;
        `}>
            {coordItems[count || 2].map(item =>
                <OneItem
                    top={item.top}
                    left={item.left}
                    number={randomValues[item.id]}
                    key={item.id}
                    imageN={imageN}
                />
            )}
        </div>
    )
})