import React from 'react'

const ContactoContent = () => {
  return (
    <>
  
    <div className="text-center">
      Si quieres dejarnos un mensaje o compartir información sobre tus experiencias con
      tus mininos, dejanos tus datos.
    </div>
    <seleccion className="contacto">
        <div className="container text-center d-flex justify-content-evenly">
          <div className="row">
            <div className="col-5 imagen   ">
              <img className="telefono" src="./img/contacto.jpg"/>
            </div>
            <div className="col-7 descripcion  ">
              <div className="mb-3">
                <label for="formGroupnombre"> </label>
                <input type="text" className="form-control" id="formGroupnombre" placeholder="Nombre"/>
              </div>
              <div className="mb-3">
                <label for="formGroupcorreo"></label>
                <input type="text" className="form-control" id="formGroupcorreo" placeholder="Correo"/>
              </div>
              <div className="mb-3">
                <label for="formGrouptelefono"></label>
                <input type="text" className="form-control" id="formGrouptelefono" placeholder="Teléfono"/>
              </div>
              <div className="mb-3 form-outline">
                <label clas="form-label" for="formGroupmensaje">Deja tu mensaje</label>
                <textarea className="form-control" id="formGroupmensaje" rows="4"></textarea>
              </div>

              <button type="button">
                Enviar
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133V2Zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6v-2.55Zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417Zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267v2.55ZM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982Zm7 4.401-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z" />
                </svg>

              </button>
            </div>
           </div>
          </div>
      
      </seleccion>

    </>
  )
};

export default ContactoContent;