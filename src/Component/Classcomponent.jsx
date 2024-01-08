import React from 'react'


class Classcomponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.getval=this.getval.bind(this)
    }
    componentDidMount(){
        console.log('hello team')
    }
    componentWillUnmount(){
        console.log('hiiii')
    }
    componentDidUpdate(){
        console.log('tean firrst')
    }
    
    getval(){
      this.setState((prev)=>{
        return{
            count:prev.count+1
        }
      })
    }
    render(){
        
        return <div>
        <p>{
             this.state.count
            }</p>
          <button onClick={this.getval}>Add</button>  

        </div>
    }
}

export default Classcomponent;