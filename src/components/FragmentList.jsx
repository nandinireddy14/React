import React from 'react'
import { ChildList } from './ChildList'

export const FragmentList = () => {
    const arr=[{
        id:1,
        title:'Java',
        body:'Java for beginners'
    },
    {
        id:2,
        title:'C',
        body:'Let us c'
    },
    {
        id:3,
        title:'C#',
        body:'Learning C#'
    }
]

// const objList=arr.map(item=>{
//     return(<React.Fragment key={item.id}>
//         <h2>{item.id}</h2>
//         <h2>{item.title}</h2>
//         <h2>{item.body}</h2>
//     </React.Fragment>)
// })

const objList=arr.map(item=><ChildList key={item.id} item={item}/>)
    return (
        // <React.Fragment>
        <>
        {
                objList
            }
            </>
            
        // </React.Fragment>
    )
}
