import { TailSpin } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => (
  <div className="loader">
    <TailSpin height={50} width={50} color="#00BFFF" />
  </div>
);

export default Loader;