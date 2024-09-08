import { useState } from "react";
import PropTypes from "prop-types";
import "./ModalForm.css";

const ModalForm = ({ showModal, setShowModal }) => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    const requestBody = {
      name: `${data.nombres} ${data.primerApellido} ${data.segundoApellido}`,
      email: data.correo,
      telefono: data.telefono,
      dni: data.dni,
    };
  
    try {
      const response = await fetch("url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (response.ok) {
        setConfirmationMessage("Registro exitoso. ¡Gracias por registrarte!");
        setTimeout(() => {
          setConfirmationMessage("");
          setShowModal(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        setConfirmationMessage(`Error al registrar: ${errorData.message || "Inténtalo de nuevo."}`);
      }
    } catch (error) {
      setConfirmationMessage("Error al registrar. Inténtalo de nuevo.");
    }
  };
  

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <form className="custom__text" onSubmit={handleSubmit}>
            <label>
              Nombres:
              <input type="text" name="nombres" required />
            </label>
            <label>
              Primer Apellido:
              <input type="text" name="primerApellido" required />
            </label>
            <label>
              Segundo Apellido:
              <input type="text" name="segundoApellido" required />
            </label>
            <label>
              DNI/Documento de identidad:
              <input type="text" name="dni" required />
            </label>
            <label>
              Teléfono:
              <input type="tel" name="telefono" required />
            </label>
            <label>
              Correo:
              <input type="email" name="correo" required />
            </label>
            <div className="modal-buttons">
              <button type="submit">Enviar</button>
              <button type="button" onClick={handleClose}>
                Cancelar
              </button>
            </div>
          </form>
          {confirmationMessage && (
            <div className="confirmation-message">
              {confirmationMessage}
            </div>
          )}
        </div>
      </div>
    )
  );
};

ModalForm.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default ModalForm;
