import  './styles.scss'

import  React from 'react'
import PropTypes from 'prop-types';


const ProgressBar=({percent})=>{
    return(
        <div className="progress">
            <div className="progressBar" style={{width:percent+'%'}}>

            </div>
            <div className="progressBarText">
                <em style={{color: percent>55 ?'#ffffff':'black'}}>
                    % {percent}
                </em>
            </div>
        </div>
    )
}
ProgressBar.propTypes = {
    percent:PropTypes.number
}
export  default  React.memo(ProgressBar)