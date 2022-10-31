import { useContext } from "react"
import EstateContext from "../context/EstateProvider.jsx";

const useEstate = () => {
  return useContext(EstateContext)
}

export default useEstate;