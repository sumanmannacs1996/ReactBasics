import './App.css';
import UserFinder from './UserFinder'
import UsersContext from './users-context';

const DUMMY_USERS = [
  {id:'sdgsdg',name:"Suman"},
  {id:'dsgsdg',name:"Megha"},
  {id:'sdgvasd',name:"Suchet"},
  {id:'sdfsadf',name:"Shaibal"},
  {id:'dsgfsad',name:"Pritom"},
];
function App() {
  const usersContext = {
    users: DUMMY_USERS
  }
  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder></UserFinder>
      </UsersContext.Provider>
  );
}

export default App;
