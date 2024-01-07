//layout
// import Layout from './layouts/default';
import Head from 'next/head';
import Footer from './components/footer';

function Home() {

    return(
           <>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
              <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">AventStore</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active text-light" aria-current="page" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-light" href="/register">Registrasi</a>
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