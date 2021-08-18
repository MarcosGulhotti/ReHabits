import { Menu } from "../../components/Menu";
import { GroupList } from "../../components/GroupList";
import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../providers/Login";

export const Groups = () => {
  const { isLogged } = useContext(LoginContext);

  if (isLogged === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <GroupList />
    </>
  );
};
