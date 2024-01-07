//layout
// import Layout from './layouts/default';
import Head from 'next/head';
import Footer from './components/footer';

function Home() {

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
                <title>Home - AventStore.com</title>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
                          <div className="container-fluid py-5">
                              <h2 className="display-6 fw-bold">SELAMAT DATANG DI ADMIN AVENT STORE</h2>
                              <p className="col-md-12 fs-4">Silahkan Melakukan Login Untuk Masuk Ke Admin</p>
                              <a href="#"className="btn btn-primary btn-lg" type="button">Halaman Utama</a>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer/>
            </>
    )
}

export default Home