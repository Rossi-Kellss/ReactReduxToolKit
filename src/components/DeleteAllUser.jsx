import React from 'react'
import styled from 'styled-components'
import { clearUsers } from "../store/slices/UserSlice";
import { useDispatch } from 'react-redux';

const DeleteAllUser = () => {
  const dispatch=useDispatch()
  const deleteUser=()=>{

    dispatch(clearUsers());
   
  }
  return (
    <Wrapper>

      <button onClick={deleteUser}>DeleteAllUser</button>
    </Wrapper>
  )
}
const Wrapper=styled.section`

button{
  outline:none;
  text-transform:capatilize;
  background-color:#db338a;
  margin-top:2rem;
}
`

export default DeleteAllUser
