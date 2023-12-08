// import Spinner from "react-spinner-material";

import { GridLoader } from "react-spinners";


const Loader = () =>{
    return (
        <div
            style={{
                margin:"auto",
                position:"absolute",
                left:"50%",
                top:"50%",
                transform:"translate(-50%, -50%)",
            }}
        >
            <GridLoader color="#3824e8" />

        </div>
    )
};

export default Loader;