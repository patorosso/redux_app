import React, { useContext } from "react";
import StoreContext from "./../context/storeContext";

function Bugs() {
  const storeContext = useContext(StoreContext);

  return <div>Bugs</div>;
}

export default Bugs;
