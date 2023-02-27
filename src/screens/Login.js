import React, { Fragment, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import customEventsBus from "../events/customEventsBus";

function Login(props) {
  const navigate = useNavigate(); // lo usi per navigare in un altra pagina
  const location = useLocation(); // lo usi per passare i parametri con lo stato
  const [searchParams] = useSearchParams(); // lo usi per passare i query params

  console.log("location", location);

  console.log("name", searchParams.get("name"));
  console.log("cc", searchParams.get("cc"));
  console.log("location-state", location.state);

  function goToRegistration() {
    navigate("/registration");
  }

  function eventCustom(e) {
    console.log("event recived");
  }

  useEffect(() => {
    /*customEventsBus.dispatch("onChangeBg", { backgroundColor: "red" });*/
    customEventsBus.on("onChangeBg", eventCustom);
    return () => {
      customEventsBus.remove("onChangeBg");
    };
  }, []);

  return (
    <div className="App">
      <button onClick={goToRegistration}>Go To Registration</button>
      <p>Login {location.state?.name}</p>
    </div>
  );
}

export default Login;
