import { useContext } from "react";
import { StoreContext } from "../stores/store";

function useStore() {
  return useContext(StoreContext);
}

export default useStore;
