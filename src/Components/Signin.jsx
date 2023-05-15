import axios from 'axios'
import React, { useRef } from 'react'
import useAuth from "../hooks/useAuth"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { bake_cookie } from 'sfcookies'
function Signin() {

    //useNavigate
    const nav = useNavigate()

    // Context Api
    const { Server_url, setIsLogin, Role, setRole } = useAuth()


    // useRef
    const name = useRef()
    const pass = useRef()
    const role = useRef()
    const secretkey = useRef()


    //  funtion 
    function submit(e) {
        e.preventDefault()

        // Axois
        const url = Server_url + "/signin"
        const data = {
            name: name.current.value,
            password: pass.current.value,
            role: role.current.value,
            secret_key: secretkey.current.value
        }
        axios.post(url, data).then(
            (res) => {
                console.log(res);
                setIsLogin(true)
                bake_cookie("isLogin", true)
                setRole(res.data.userExist.role)

                if (res.data.userExist.role === "admin") {
                    return nav("/admin")
                }

                nav("/users")

            }
        ).catch(
            (err) => {
                console.log(err);
                nav("/")
            }
        )



    }



    return (
        <>
            <div className="login-box">
                <h3 className='text-light text-center '> Signin </h3>

                <form >
                    <div className="user-box">
                        <input ref={name} type="text" name="" required="" />
                        <label>Name</label>
                    </div>
                    <div className="user-box">
                        <input ref={pass} type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input ref={role} type="text" name="" required="" />
                        <label>Role</label>
                    </div>
                    <div className="user-box">
                        <input ref={secretkey} type="password" name="" required="" />
                        <label>Secret Key</label>
                    </div><center>
                        <a href="#" onClick={(e) => submit(e)}>
                            SEND
                            <span></span>
                        </a></center>
                </form>
                <Link to="/signup"> Signup </Link>
            </div>


        </>
    )
}

export default Signin