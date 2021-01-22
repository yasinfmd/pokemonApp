import React, { memo } from 'react'
import './styles.scss'
const BallLoading = () => {
    return (
        <div className="ball-loader">
            <div className="ball-loader-ball ball1"></div>
            <div className="ball-loader-ball ball2"></div>
            <div className="ball-loader-ball ball3"></div>
        </div>
    )
}
export default memo(BallLoading)