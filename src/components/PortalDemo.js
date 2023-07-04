import React from 'react'
import ReactDOM  from 'react-dom'

export const PortalDemo = () => {
    return ReactDOM.createPortal(
        <div>
            Portals Demo
        </div>,
        document.getElementById('portal-root')
    )
}
//http://codesandbox.io/s/00254q4n6p
//codepen.io/gaearon/pen/jGBWpE