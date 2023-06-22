import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const data=useSelector((state)=>{
        return state.users

    })
    console.log(data);
  return (
    <Wrapper>
        {
        data.map((user,id)=>{
            return <li key={id}>{user}</li>
        })}
    </Wrapper>

  )
}
const Wrapper=styled.section`
li{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;
    
    &:first-child{
        border-top:1px solid #eee;
    }
}
`

export default DisplayUser