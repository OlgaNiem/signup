import React from 'react'
import style from '../styles/Home.module.css'


const LoginForm = () => {    
  return (
    <div className={style.body}>
        <div className={style.loginBox}>
            <h2>Login</h2>
        <form>
            <div className={style.userBox}>
                <input type="text" name="" />
                <label>Email</label>
            </div>
            <div className={style.userBox}>
                <input type="password" name="" />
                <label>Password</label>
            </div>
            <button className={style.btn} type="submit">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default LoginForm