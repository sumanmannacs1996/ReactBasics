import React,{useState,useEffect} from 'react'
const SimpleInput = (props) => {
  const [enteredName,setEnteredName] = useState('');
  const [enteredNameTouched,setEnteredNameTouched] = useState(false);
  const [enteredEmail,setEnteredEmail] = useState('');
  const [enteredEmailTouched,setEnteredEmailTouched] = useState(false);
  const [isFormValid,setFormValid] =useState(false);
  const enteredNameValid = enteredName.trim() !== '';
  const nameInputisInvalid = !enteredNameValid && enteredNameTouched;
  const enteredEmailValid =  enteredEmail.includes('@');
  const EmailInputisInvalid = !enteredEmailValid && enteredEmailTouched;

  const nameInputCahngeHandler=(event)=>{
    setEnteredName(event.target.value);
  }
  const nameInputBlurHandler =()=>{
    setEnteredNameTouched(true);
  }
  const emailInputCahngeHandler=(event)=>{
    setEnteredEmail(event.target.value);
  }
  const emailInputBlurHandler=()=>{
    setEnteredEmailTouched(true);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(nameInputisInvalid){
      return false;
    }
    console.log(enteredName,enteredEmail);
    setEnteredName('');
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  }

  useEffect(()=>{
    if((!enteredNameValid) || (!enteredEmailValid)){
      setFormValid(true);
    }
    else{
      setFormValid(false);
    }
  },[enteredNameValid,enteredEmailValid])

  const nameInputClass = nameInputisInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClass = EmailInputisInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange={nameInputCahngeHandler} 
        onBlur={nameInputBlurHandler} 
        value={enteredName}/>
        {nameInputisInvalid && <p className='error-text'>Name must not empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' 
        onChange={emailInputCahngeHandler} 
        onBlur={emailInputBlurHandler} 
        value={enteredEmail}/>
        {EmailInputisInvalid && <p className='error-text'>Email must content @</p>}
      </div>
      <div className="form-actions">
        <button disabled={isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
