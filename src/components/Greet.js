// function Greet(){
// return <h1>Hello React</h1>
// }

// const Greet=()=><h1>Hello React</h1>
export const Greet=({name,designation,children})=>{
    // props.name="Next JS"  props are immutable
return(<div>
            <h1>Hello {name} aka {designation} </h1>
            {/* <h1>Hello {props.name} aka {props.designation} </h1> */}
            {children}
        </div>) 
}


//if default exports while importing can have any name
//Default Exports
// export default Greet -->import MyComp(can change name of import) from './components/Greet'
//Named Exports
//export const Greet=()=><h1>Hello React</h1> ----->import {Greet} (cannot change name of import) from './components/Greet';