import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet, useLocation } from "react-router";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "@/store/userSlice";

const AppLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const checkUserAuthentication = async () => {
    let data = localStorage.getItem("auth-data");
    if (data) {
      data = await JSON.parse(data);
      if (data) {
        const { user, auth_token } = data;
        dispatch(setUser({ user, auth_token }));
      }
    }
  };

  useEffect(() => {
    checkUserAuthentication();
  }, []);
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="mt-[60px]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default AppLayout;
