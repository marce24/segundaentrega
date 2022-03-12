import React from 'react'

const Signup = () => {
  return (
    <>
      <button type="button" className="btn btn-outline-dark ms-auto" data-bs-toggle="modal" data-bs-target="#signupModal">
        <span className='fa fa-user-plus me-1'/>
        Registrarse
      </button>

      <div className="modal fade" id="signupModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Registrarse</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-2">
                <span className='fa fa-google me-2' />
                Registrarse con Google
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInput" className="form-label">Usuario</label>
                  <input type="text" className="form-control" id="exampleInput"/>                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">No compartiremos tu e-mail con nadie.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">Registrarse</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup