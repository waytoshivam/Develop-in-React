import React,{Component} from"react";
class App extends Component{

    state={
            counter:1,
         };
         handleClick(event){     //handleClick=()=>{ //
            let localCounter=this.state.counter;
            this.setState({
               counter:localCounter+1
            })
        }
  render(){
    return(
        <>

        <h1>Welcome to React</h1>
        <button onClick={(event)=>this.handleClick(event)}>Add</button>    // more changes can done
        <p>{this.state.counter}</p>
        
        </>
    
   );
    }  
 }
export default App;















// import React, {Component} from"react";
// class App extends Component{

// constructor(){
//    super();
//    this.handleClick=this.handleClck.bind(this);
// }
//   state={
//     counter:1,
//  };
//  handleClick(event){
//     let localCounter=this.state.counter;
//     this.setState({
//        counter:localCounter+1
//     })
// }
//     render(){
//         return(
//      <>
//      <h1>Welcome to React</h1>
//      <button onClick={this.handleClick}>Add</button>
//      <p>{this.state.counter}</p>
//      </>
//         );
//     }
//     }
//     export default App
            