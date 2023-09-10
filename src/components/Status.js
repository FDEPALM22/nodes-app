import React, { useState } from "react";
import './Status.css';
const Status = () => {

    const [status, setColorStatus] = useState(true);

    const changeColorStatus = () => {
        if (status === 'true') {
            setColorStatus('blue');
        } else {
            setColorStatus('red');
        };
    }
    return (
        <div>
        <div className="luz roja">
            OFFLINE
        </div>
         <div className="luz blue">
         ONLINE
     </div>
     </div>

    )
};

export default Status;