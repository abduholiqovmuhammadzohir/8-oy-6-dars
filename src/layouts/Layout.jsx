import React from 'react'

function Layout({children}) {
  return (
    <div>
        <div className="left-sidebar">
            <h1>Left</h1>
        </div>
        {children}
        <div className="right-sidebar">
            <h1>Right</h1>
        </div>
    </div>
  )
}

export default Layout