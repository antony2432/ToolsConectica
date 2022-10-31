import React from "react";
import { ButtonInteractive } from "./button";

const ToUpperOrLower = ({ setTesFinal, setEstadoMostrar }) => {
  //* Estado para el texto inicial
  const [textConver, setTextConver] = React.useState("");
  const valorTextArea = (event) => {
    setTextConver(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center w-80 h-52 rounded-xl bg-cardBackground mt-5">
      <label className="text-cardHeadline">
        Convierte en <strong>mayúscula</strong> o <strong>minúscula</strong>
      </label>
      <textarea
        id="labelTo"
        className="mt-5 rounded text-center h-14"
        placeholder="Ingresa tu texto"
        onChange={valorTextArea}
      />
      <menu className="flex items-center justify-around mt-5 w-full">
        <ButtonInteractive
          nameButton="Mayúscula"
          buttonStyle="text-buttonText rounded-lg py-1 px-6 bg-buttonBg"
          textoValue={textConver}
          setTesFinal={setTesFinal}
          setEstadoMostrar={setEstadoMostrar}
        />
        <ButtonInteractive
          buttonStyle="text-buttonText rounded-lg py-1 px-6 bg-buttonBg"
          nameButton="Minúscula"
          textoValue={textConver}
          setTesFinal={setTesFinal}
        />
      </menu>
    </div>
  );
};

export { ToUpperOrLower };