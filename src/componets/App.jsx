import React from "react";
import { MainHeader } from "./headercomponet";
import { ToUpperOrLower } from "./toUpper";
import { MostrarItem } from "./mostrar";
function App() {
  //* Estado para mostrar
  const [textFinal, setTesFinal] = React.useState("");
  const [estadoMostrar, setEstadoMostrar] = React.useState(false);
  return (
    <main className="flex flex-col items-center bg-backgroundWithCard w-full h-screen">
      <MainHeader />
      <ToUpperOrLower
        setTesFinal={setTesFinal}
        setEstadoMostrar={setEstadoMostrar}
      />
      <MostrarItem estadoMostrar={estadoMostrar} textTransform={textFinal} />
    </main>
  );
}

export default App;
