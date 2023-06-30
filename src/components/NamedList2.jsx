import React from 'react'
import { Person } from './Person'

export const NamedList2 = () => {
    const names=['Mango','Grapes','Apple','Orange']
    const nameList=names.map((name,index)=><h2 key={index}>{index},{name}</h2>)

    const persons=[{
        id:1,
        name:"John",
        age:22,
        skill:'React'
    },
    {
        id:2,
        name:"Clark",
        age:32,
        skill:'JS'
    },
    {
        id:3,
        name:"Diana",
        age:26,
        skill:'Angular'
    },
]
const personList=persons.map(person=><Person key={person.id} person={person}/>)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
            <h2>{names[3]}</h2> */}
            
            {nameList}
            {personList}
        </div>
    )
}
