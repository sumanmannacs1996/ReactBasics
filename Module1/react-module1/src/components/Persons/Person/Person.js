import React,{Component} from 'react';
import classes from'./Person.css';
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    /*static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/
    componentDidMount(){
        console.log('[Person.js] componentDidMount');
        this.inputElementRef.current.focus();   //to focus the last elemet 
      }
    shouldComponentUpdate(nextProps,nextState){
        console.log("[Person.js] shuldComponentUpdate");
        console.log("nextProps= ",nextProps);
        /*const isUpdated =nextProps.name ===this.props.name;
        if(isUpdated)
            return false;
        else*/
            return true;    
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message:"Snapshot!"};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }
    render(){
        console.log('[Person.js] rendering.....');
    return(<div className={classes.Person}>
            <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} Years Old!</p>
            <input type='txt' onChange={this.props.change} value={this.props.name} ref={this.inputElementRef}></input>
            <p>{this.props.children}</p>
            </div>
         );
         }
    
};

export default Person;