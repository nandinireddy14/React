import React from 'react'


const MemoComp = ({name}) => {
    console.log('Rendering memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

//Something called Higher Order component React.memo()
//accepts a Component and return a new enhanced Component
//In this case a Component capable of avoiding rereneders
// when there is no change in props
//similar to PureComponents it works with functional components
//instead