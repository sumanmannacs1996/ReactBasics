import React,{PureComponent} from "react";
import Person from './Person/Person';

class Persons extends PureComponent{
    /*static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }*/
    componentDidMount(){
        console.log('[Persons.js] componentDidMount');
      }
    /*shouldComponentUpdate(nextProps,nextState){
        console.log("[Persons.js] shuldComponentUpdate");
        console.log("nextProps",nextProps.persons);
        console.log("thisProps",this.props.persons);
        if(nextProps.persons !== this.props.persons ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked){
            return true;
        }
        else{
            return false;
        }
    }*/
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message:"Snapshot!"};
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    render(){
        console.log('[Persons.js] rendering.....');
        return (
            this.props.persons.map((p,idx)=><Person
                key ={p.id}
                name ={p.name}
                age={p.age}
                change ={(event)=>this.props.changed(event,p.id)}
                click ={()=>this.props.clicked(idx)}
                children={p.other}
                ></Person>
            )
        );
    }
   
}

export default Persons;