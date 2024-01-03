import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Giriş</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Eposta adresiniz</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="isim@ornek.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Şifreniz</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Şifreniz"
                />
              </div>
              <div className="my-3">
                <p>Yeni misiniz? <Link to="/register" className="text-decoration-underline text-info">Kayıt ol</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" disabled>
                  Giriş yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
