
import { useDispatch } from 'react-redux';
import { logout } from 'pages/Login/state/authSlice';
import { useState } from 'react';

export default function AccountModal(){
    const dispatch = useDispatch();
    const [showModal, setShowModal]= useState(false)
return (
   <div className='modal'>
    <button onClick={()=>dispatch(logout())}>logout</button>
   </div>

)
}