import React,{useState} from "react";
const withLoading = (Component) => {

    const Wrapped = (props) => {
        const [loading,setLoading]=useState(false)
        return <Component loading={loading} setLoading={setLoading} {...props} />;
    };
    return Wrapped;
};
export default withLoading;