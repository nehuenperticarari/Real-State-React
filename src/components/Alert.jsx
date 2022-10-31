import React from 'react'

const Alert = (alert) => {
  const {msg, error} = alert.alert
  return (
    <div>
        <p className={`${error === true ? 'alert__error' : 'alert__successful'}  alert`}>{msg}</p>
    </div>
  )
}

export default Alert