import React,{useState} from "react";
import popup from '../css/popup.css';

function Popup(props)
{
    return(props.trigger) ? 
    (<div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={()=>this.setTtrigger(false)}>close</button>
            {props.children}
        </div>
        </div>

    ): "";

}
export default Popup;