import react from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Cms() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>CMS</h1>
      <h2>Elementi dinamici della navigazione</h2>

      <button onClick={() => navigate("order")}>Order</button>
      <button onClick={() => navigate("cart")}>Cart</button>

      <Outlet />
    </div>
  );
}
export default Cms;
