import { Button } from "flowbite-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
import NavComp from "../components/NavComp";

const Log = ({ logged, handler }) => {
  return (
    <div>
      <Button onClick={handler} className="">
        {logged ? "Log out" : "Log in"}
      </Button>
    </div>
  );
};

const Home = () => {
  const [logged, setLogged] = useState(true);
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NavComp logged={logged} onOpen={onOpen}/>
      <Log logged={logged} handler={() => setLogged(!logged)} />
      <button onClick={onOpen}>Here</button>
      <Login open={open} onOpen={onOpen} />
      <Outlet />
    </div>
  );
};

export default Home;
