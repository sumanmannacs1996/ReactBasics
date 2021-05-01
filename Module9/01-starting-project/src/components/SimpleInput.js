import useInput from '../hooks/use-input';
const SimpleInput = (props) => {

  const {
    value:name,
    isValid:isNameValid,
    hasError:nameError,
    inputCahngeHandler:nameChangehandler,
    inputBlurHandler:nameBlurHandler,
    reset:resetName
  } =useInput(value=>value.trim() !== '');

  const {
    value:email,
    isValid:isEmailValid,
    hasError:emailError,
    inputCahngeHandler:emailChangehandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmail
  } =useInput(value=>value.includes('@'));

  let isFormValid =false;
  
  if((!isNameValid) || (!isEmailValid)){
    isFormValid=true;
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    
    console.log(name,email);
    resetName();
    resetEmail();
  }



  const nameInputClass = nameError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange={nameChangehandler} 
        onBlur={nameBlurHandler} 
        value={name}/>
        {nameError && <p className='error-text'>Name must not empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' 
        onChange={emailChangehandler} 
        onBlur={emailBlurHandler} 
        value={email}/>
        {emailError && <p className='error-text'>Email must content @</p>}
      </div>
      <div className="form-actions">
        <button disabled={isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
