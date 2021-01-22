import React from "react";
import {toast} from "react-toastify";
const withMesaj = (Component) => {
    const showNotifiy=(text,pos="top-right",type="info")=>{
        toast[type](text, {
            position: pos,
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const Wrapped = (props) => {
        return <Component showNotifiy={showNotifiy} {...props} />;
    };
    return Wrapped;
};
export default withMesaj;