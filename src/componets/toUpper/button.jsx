import React from "react";

const ButtonInteractive = ({ nameButton, buttonStyle, textoValue, setTesFinal, setEstadoMostrar}) => {
  const transformText = (option) => {
    let texto = textoValue;
    if (option == "Minúscula") {
      setTesFinal(texto.toLowerCase())
    } else if (option == "Mayúscula") {
      setTesFinal(texto.toUpperCase())
    }
    setEstadoMostrar(true)
    setTimeout(()=>{
      setEstadoMostrar(false)
    }, 20000)
  };

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={() => transformText(nameButton)}
    >
      {nameButton}
    </button>
  );
};

export { ButtonInteractive };
