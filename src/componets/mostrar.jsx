import React from "react";
import CopyToClickBoard from "react-copy-to-clipboard";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MostrarItem = ({ textTransform, estadoMostrar }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={estadoMostrar?'flex flex-col justify-center items-center w-80 h-52 rounded-xl bg-cardBackground mt-5':'hidden'}>
      <p className="text-cardHeadline text-center w-72">{textTransform}</p>
      <CopyToClickBoard text={textTransform}>
        <button
          className="text-buttonText text-center rounded-lg py-1 px-6 mt-10 bg-buttonBg"
          onClick={handleClick}
        >
          Copiar
        </button>
      </CopyToClickBoard>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "50%" }}>
          Copiado!
        </Alert>
      </Snackbar>
    </div>
  );
};

export { MostrarItem };
