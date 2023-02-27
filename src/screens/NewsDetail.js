import React, { Fragment } from "react";
import {
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";

function NewsDetail(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams(); // usati per passare parametri con l'URL che però non sono query params?
  const [searchParams] = useSearchParams();

  console.log("location", location);

  console.log("name", searchParams.get("name"));
  console.log("cc", searchParams.get("cc"));

  console.log("params", params);

  function goToRegistration() {
    navigate("/registration");
  }

  return (
    <div className="App">
      <p>Detail: {params?.id}</p>
    </div>
  );
}

export default NewsDetail;
