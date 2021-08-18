import { Menu } from "../../components/Menu";
import { GroupList } from "../../components/GroupList";
import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../providers/Login";

export const Groups = () => {
  const { isLogged, setIsLogged } = useContext(LoginContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    authenticate();
    // eslint-disable-next-line
  }, []);

  const authenticate = () => {
    if (token !== "") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <GroupList />
    </>
  );
};
