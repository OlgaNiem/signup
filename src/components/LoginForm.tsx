import React, {FormEvent, useState} from 'react'
import style from '../styles/Home.module.css'


const LoginForm = () => {    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        setVisible(true)
    }
  return (
    <div className={style.body}>
        <div className={style.loginBox}>
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div className={style.userBox}>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" name="" />
                <label>Email</label>
            </div>
            <div className={style.userBox}>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="" />
                <label>Password</label>
            </div>
            <button className={style.btn} type="submit">Submit</button>
        
            {visible ? 
            <div className='w-[50%] h-[50%] flex justify-center items-center flex-col mt-5 shadow-md rounded-md'>
                <h2 className='text-xl'>You are signed in as :</h2><span className='text-xl text-amber-700'>{email}</span>
                <h4>And your password is: </h4><span>{password}</span>
                <button className={style.btn} onClick={()=>setVisible(false)}>Close</button>
            </div>: null}
        </form>
    </div>
    </div>
  )
}

export default LoginForm