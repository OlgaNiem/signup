import React, {FormEvent, useState} from 'react'
import style from '../styles/Home.module.css'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e:FormEvent){
        e.preventDefault()
        console.log(username, email, password)
    }
    return (
        <div className={style.body}>
            <div className={style.loginBox}>
                <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className={style.userBox}>
                    <input onChange={(e)=>setUsername(e.target.value)} type="text" name="" />
                    <label>Username</label>
                </div>
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

export default RegisterForm