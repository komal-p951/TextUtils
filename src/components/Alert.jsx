import React from 'react'

export default function Alert(props) {
    const capatlize = (word) => {
        return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
    }
  return (
    <div style={{height:'10px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatlize(props.alert.type)} &nbsp;&nbsp;&nbsp;&nbsp;</strong>{props.alert.msg}
        </div>}
    </div>
  )
}
