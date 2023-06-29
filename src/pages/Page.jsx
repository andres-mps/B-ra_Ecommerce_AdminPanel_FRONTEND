import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
function Page() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/dashboard");
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}
export default Page;
