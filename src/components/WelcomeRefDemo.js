import React, { Component } from 'react'

export class WelcomeRefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()

        //1.
        this.cbRef=null
        //2.
        this.setCbRef=element=>this.cbRef=element
    }
    // what exactly does this.inputRef holds
    //inputRef hold an object after the refernce is created
    //current points to the actual dom node
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        //react will call the ref callback with the dom element when the component mounts
        //with null when component unmounts
        // 3.
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                {/* 4. */}
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default WelcomeRefDemo

//as soon as the page laods the input field sould get focused.
//USing refs this can be done in three simple steps
//1.create a ref using React.createRef().common to create ref in constructor
// so that they can be referenced throughout the application
//2.attach this ref to the input element in the render method and to attach ref
// we make use of the reserved ref attribute.we now have the reference to the input element
//3.to call focus() method on this input element
