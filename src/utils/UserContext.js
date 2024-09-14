import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Jonh Doe",
  dummyData: "Some dummy data.",
});

export default UserContext;
