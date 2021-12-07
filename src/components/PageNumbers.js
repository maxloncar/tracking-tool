import React from 'react'
import stepbackward from "../assets/stepbackward.svg";
import caretleft from "../assets/caretleft.svg";
import stepforward from "../assets/stepforward.svg";
import caretright from "../assets/caretright.svg";

export default function PageNumbers() {
    return (
        <div className="page_numbers">
            <img src={stepbackward} alt="Stepbackward" />
            <img src={caretleft} alt="Caretleft" />
            <button>1</button>
            <img src={caretright} alt="Caretright" />
            <img src={stepforward} alt="Stepforward" />
        </div>
    )
}
