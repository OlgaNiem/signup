import React, {FormEvent, useState} from 'react'
import style from '../styles/Home.module.css'


const LoginForm = () => {    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        console.log(email, password)
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
        </form>
        </div>
    </div>
  )
}

export default LoginForm