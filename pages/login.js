import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import axios from "axios";
import Cookies from 'js-cookie';
import Footer from './components/footer';


function Login(){

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const [validation, setValidation] = useState([]);

        const loginHandler = async (e) => {
            e.preventDefault();

            const formData = new FormData();

            //append data to formData
            formData.append('email', email);
            formData.append('password',password);

            //send data to server
            await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`,formData).then((response) => {
                //set token on cookies    
                Cookies.set('token',response.data.token);
                Cookies.set('name', response.data.name);

                //redirect to dashboard
                Router.push('/dashboard');
            }).catch((e) => {
                setValidation(e.response.data);
            })
        };

        //hook usereffect
        useEffect(() => {

            //check token
            if(Cookies.get('token')){
                Router.push('/dashboard');
            }
        })

        return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">AventStore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/register">Registrasi</a>
                    </li>
                   
                </ul>
                </div>
            </div>
            </nav>
          <Head>
                    <title>Login Account - Travel.com</title>
                </Head>
                <div className="container" style={{ marginTop: '80px' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="card border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h4 className="fw-bold">HALAMAN LOGIN</h4>
                                    <hr/>
                                    {
                                        validation.message && (
                                            <div className="alert alert-danger">
                                                {validation.message}
                                            </div>
                                        )
                                    }
                                    <form onSubmit={loginHandler}>
                                        <div className="mb-3">
                                            <label className="form-label">ALAMAT EMAIL</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                        </div>
                                        {
                                            validation.email && (
                                                <div className="alert alert-danger">
                                                    {validation.email[0]}
                                                </div>
                                            )
                                        }
                                        <div className="mb-3">
                                            <label className="form-label">PASSWORD</label>
                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                        </div>
                                        {
                                            validation.password && (
                                                <div className="alert alert-danger">
                                                    {validation.password[0]}
                                                </div>
                                            )
                                        }
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">LOGIN</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>

        </>
              
        )
}


export default Login;