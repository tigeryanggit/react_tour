import React from 'react'

function Service({groupName, itemName, title, text}) {
  return (

            <div className={groupName}>
                <i className={itemName}></i>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
  )
}

export default Service