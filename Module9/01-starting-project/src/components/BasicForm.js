import useBasicInput from '../hooks/basic-form-input';
const BasicForm = (props) => {
  const {
    value:firstName,
    isValid:firstNameValid,
    hasError:firstNameError,
    inputChangeHandler:firstNameCahnge,
    inputBlurHandler:firstNameBlur,
    rest:firstNameRest
  }=useBasicInput(value=>value.trim() !== '');

  const {
    value:lastName,
    isValid:lastNameValid,
    hasError:lastNameError,
    inputChangeHandler:lastNameCahnge,
    inputBlurHandler:lastNameBlur,
    rest:lastNameRest
  }=useBasicInput(value=>value.trim() !== '');

  const {
    value:email,
    isValid:emailValid,
    hasError:emailError,
    inputChangeHandler:emailCahnge,
    inputBlurHandler:emailBlur,
    rest:emailRest
  }=useBasicInput(value=>value.includes('@'));

  let isFormValid =false;
  if(!firstNameValid || !lastNameValid || !emailValid){
    isFormValid =true;
  }

  const submitHandler =(event)=>{
    event.preventDefault();
    console.log(`Fisrst Name: ${firstName} Last Name: ${lastName} Email: ${email}`);
    firstNameRest();
    lastNameRest();
    emailRest();
  }

  const firstNameClass = firstNameError ? 'form-control invalid' : 'form-control';
  const lastNameClass = lastNameError ? 'form-control invalid' : 'form-control';
  const emailClass = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
        <div className={firstNameClass}>
          <label htmlFor='Fname'>First Name</label>
          <input type='text' id='Fname' 
          onChange={firstNameCahnge}
          onBlur={firstNameBlur}
          value={firstName}/>
          {firstNameError && <p className='error-text'>First Name must not empty.</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor='Lname'>Last Name</label>
          <input type='text' id='Lname'
          onChange={lastNameCahnge}
          onBlur={lastNameBlur}
          value={lastName}/>
          {lastNameError && <p className='error-text'>Last Name must not empty.</p> }
        </div>
        <div className={emailClass}>
          <label htmlFor='name'>E-Mail Address</label>
          <input type='email' id='name' 
        onChange={emailCahnge}
        onBlur={emailBlur}
        value={email}/>
        {emailError && <p className='error-text'>Email must content @</p>}
      </div>
      <div className='form-actions'>
        <button disabled={isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
