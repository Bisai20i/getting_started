import React from 'react'
const upCaser = (word) =>{
    const upWord = word.toUpperCase()
    return upWord.charAt(0)+word.slice(1)
}

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.stat}`} role="alert">
        <b>{upCaser(props.alert.stat)}</b> : {props.alert.msg}
    </div>
  )
}

export default Alert