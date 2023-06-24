import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {MdDeleteForever} from 'react-icons/md'
import { removeUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DisplayUser = () => {
    const dispatch=useDispatch();
    const deleteUser=(id)=>{
        dispatch(removeUser(id))

    }
    const data=useSelector((state)=>{
        return state.users

    })
    
  return (
    <Wrapper>
        {
        data.map((user,id)=>{
            return <li key={id}>{user}
            <button className='btn-delete'>
                <MdDeleteForever className="delete-icon" onClick={()=>{deleteUser(id)}}/>
            </button>
            
            </li>
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

.delete-icon{
    color:red;
    font-size:2rem;
}
button{
    outline:none;
    border:none;

}
`

export default DisplayUser