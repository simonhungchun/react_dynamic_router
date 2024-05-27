import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/one");
    }, 2000);
  });
  return <h1>not found</h1>;
}

export default Error404;
