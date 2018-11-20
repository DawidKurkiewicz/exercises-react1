import React from 'react'

const Button = (props) => (
    <div>
        <button
            onClick={() => alert(props.alertText)}
        >
            {props.label}
        </button>
    </div>
)

export default Button