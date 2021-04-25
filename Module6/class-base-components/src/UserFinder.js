import Rreact,{Component} from 'react'
import User from './User';
import UsersContext from './users-context';
class UserFinder extends Component{
    static contextType = UsersContext;
    constructor(){
        super();
        this.state ={
             filteredUser:[],
             searchTerm:''
        };
    }
    componentWillUnmount(){
        //once we conditionaly remove the component it will run 
        //we generaly write cleanup logic in it
    }
    componentDidMount(){
        //sending http request to server to get data only ony run once
        //when the component initialy render for the first time
        this.setState({
            filteredUser:this.context.users
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUser:this.context.users.filter((p)=>p.name.includes(this.state.searchTerm))
            })
        }
    }
    searchChangeHandler(event){
        this.setState({searchTerm:event.target.value});
    }
    render(){
        return(
            <div>
                <input type='search' onChange={this.searchChangeHandler.bind(this)}></input>
                <User users ={this.state.filteredUser}></User>
            </div>
        )
    }
}
export default UserFinder;