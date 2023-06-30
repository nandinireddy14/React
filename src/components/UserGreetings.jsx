import React from 'react'

export const UserGreetings = () => {

    const isLoggedIn=false
    return (
        <div>

            {/* conditional rendering & short circuit method */}
            {/* <h1>Welcome {isLoggedIn?'CGG':'Guest'}</h1> */}
            <h1>Welcome {isLoggedIn&&'CGG'}</h1>
        </div>
    )
}

