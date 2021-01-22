import React from "react";
import  './styles.scss'
import  {APP_HEADER,APP_SUB_HEADER} from "../../const";

const Header=()=>{
        return(
            <header className="appHeader">
                  <h2>{APP_HEADER}</h2>
                 <p>{APP_SUB_HEADER}</p>
            </header>
        )
}
export default React.memo(Header)