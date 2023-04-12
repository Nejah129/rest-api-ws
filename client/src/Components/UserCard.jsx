import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser, getUsers } from '../redux/actions';
import EditUser from './Edit';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    return (
    <div>
        <h1>{user.name}</h1>
        <button onClick={()=>{dispatch(deleteUser(user._id));dispatch(getUsers())}} > Delete</button>
        <EditUser user={user}/>
        <hr/>
    </div>
  )
}

export default UserCard