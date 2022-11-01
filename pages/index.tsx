import styled from '@emotion/styled'
import { ButtonSettings } from './components/ButtonSettings'
import { InputSettingsValues } from './components/InputSettingsValues'
import { InputSettingsCount } from './components/InputSettingsCount'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export const StyledBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const StyledBlockItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 700px;
height: 660px;
background-color: #fff;
border: 20px solid transparent;
border-image-source: linear-gradient(198.7deg, #7F75F0 -40.02%, #101F32 96.22%);
border-image-slice: 1;
border-radius: 40px;
`

const StyledItem = styled.div`
width: 100%;
text-align: center;
`

const StyledItemName = styled.div`
font-family: 'Helvetica';
font-weight: 400;
font-size: 32px;
line-height: 44px;
color: #423F45;
`

const StyledButtonStart = styled.button`
font-family: 'Helvetica';
font-weight: 400;
font-size: 32px;
line-height: 44px;
color: #FFFFFF;
background-color: #38DF7A;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
border-radius: 20px;
border: none;
padding: 12px 75px;

&:hover{
  background-color: #2ee576;
}
`


export default function Home() {
   
  const [count, setCount] = useState<number>(2)
  const [values, setValues] = useState<number>(1)
  const [sort, setSort] = useState(true)
  
  const changeSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <Head>
        <title>Тренажер “Порядок” соло режим</title>
      </Head>

      <StyledBlock>
        <StyledBlockItems>

          <StyledItem 
            style={{
              margin: '37px 0px 16px 0px',
            }}
          >
            <StyledItemName>
              Кол-во предметов
            </StyledItemName>
          </StyledItem>

          <StyledItem
            style={{
              marginBottom: '54px',
            }}
          >
            <InputSettingsCount
              setCount={setCount}
            />
          </StyledItem>

          <StyledItem
            style={{
              marginBottom: '18px',
            }}
          >
            <StyledItemName>
              Значения
            </StyledItemName>
          </StyledItem>

          <StyledItem
            style={{
              marginBottom: '73px',
            }}
          >
           <InputSettingsValues
              setValues={setValues}
           />
          </StyledItem>

          <StyledItem 
            style={{
              display: 'flex', 
              justifyContent: 'space-between',
              width: '531px',
              marginBottom: '95px',
            }}
          >
            <ButtonSettings
              sort={sort}
              click={changeSort}
            >
              По возрастанию
            </ButtonSettings>

            <ButtonSettings
              sort={!sort}
              click={changeSort}
            >
              По убыванию
            </ButtonSettings>

          </StyledItem>
          
          <StyledItem>
            <Link
            href={{
              pathname: '/game',
              query: { sort, count, values }
            }}
            >
              <StyledButtonStart
              >
                Играть
              </StyledButtonStart>
            </Link>

          </StyledItem>
          
        </StyledBlockItems> 
      </StyledBlock>
    </>
    
  )
}
