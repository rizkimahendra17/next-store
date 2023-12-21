import Layout from "./layouts/default";
import { useState } from "react";
import Head from "next/head";
import Router from 'next/router';
import axios from "axios";


function Register(){

    //define State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //function registerhanler

    const registerHendler = async (e) => {
        e.preventDefault();

        //initialize formdata

        const formData = new FormData();

        //append data to formdata
        formData.append('name', name);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('password_confirmation',passwordConfirm);

    
        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`,formData).then(() =>{
            
            Router.push('/login')
        
        }).catch((e) => {
            setValidation(e.response.data);
        })

    };

    return(
        <Layout>
            <Head>
                <title>Register Account - Travel Coding.com</title>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">HALAMAN REGISTER</h4>
                                <hr/>
                                <form onSubmit={registerHendler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">NAMA LENGKAP</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                                            </div>
                                            {
                                            validation.name && (
                                                <div className="alert alert-danger">
                                                    {validation.name[0]}
                                                </div>
                                            )
                                            }
                                        </div>
                                        <div className="col-md-6">
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
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
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
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">KONFIRMASI PASSWORD</label>
                                                <input type="password" className="form-control" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>  
    ) 
}


export default Register;