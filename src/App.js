import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addExpense } from './redux/actions/actions';
import Expenses from './Components/Expenses';
import {Form, FormHeader, Control, Input, FormSubmit} from './Components/form/FormStyled';


function App() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const [errors, setErrors] = useState({
    titleError: true,
    numberError: true,
    dateError: true
  });

  const [btnDIsabled, setBtnDIsabled] = useState(true);

  const [blurInputs, setBlurInputs] = useState({
    titleBlur: false,
    priceBlur: false,
    dateBlur: false
  })

  const [data, setData] = useState({
    title: '',
    price: '',
    date: ''
  });

  const inputBlurHandler = (e)=>{
    setBlurInputs(prev=>{
      return {
        ...prev,
        [e.target.name + 'Blur']: true
      }
    })
  }

  console.log(blurInputs)

  useEffect(()=>{
    if(errors.titleError || errors.numberError || errors.dateError){
      setBtnDIsabled(true);
    } else {
      setBtnDIsabled(false);
    }
  }, [data, blurInputs, errors.titleError, errors.numberError, errors.dateError]);

  const inputHandler = (e) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setErrors(prev => ({
        ...prev,
        [e.target.dataset.error]: true
      }))
    } else {
      setErrors(prev => ({
        ...prev,
        [e.target.dataset.error]: false
      }))
    }

    setData({
      ...data,
      [e.target.name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(btnDIsabled){
      return;
    }
    console.log('hi!')
    dispatch(addExpense(data));
    setData({
      title: "",
      price: "",
      date: ''
    })
    
    setErrors({
      titleError: true,
      numberError: true,
      dateError: true
    })
    setBlurInputs({
      titleBlur: false,
      priceBlur: false,
      dateBlur: false
    })
  }


  return (
    <div className="App">
      <section>
        <Form onSubmit={submitHandler}>
          <FormHeader>Redux practic</FormHeader>
          <Control>
            {/* <Label>Title</Label> */}
            <Input type="text" name="title"
              value={data.title}
              onChange={inputHandler}
              placeholder="Title"
              primary={errors.titleError && blurInputs.titleBlur}
              data-error="titleError"
              onBlur={inputBlurHandler}
            />
          </Control>

          <Control>
            {/* <Label>Number</Label> */}
            <Input type="number"
              name="price"
              value={data.price}
              onChange={inputHandler}
              placeholder="number"
              primary={errors.numberError && blurInputs.priceBlur}
              data-error="numberError"
              onBlur={inputBlurHandler}
            />
          </Control>
          <Control>
            {/* <Label>Date</Label> */}
            <Input type="date"
              name="date"
              value={data.value}
              onChange={inputHandler} 
              placeholder="date" 
              primary={errors.dateError && blurInputs.dateBlur}
              data-error="dateError"
              onBlur={inputBlurHandler}
            />
          </Control>
          <Control>
            <FormSubmit disabled={btnDIsabled} primary={btnDIsabled}>Add</FormSubmit>
          </Control>
        </Form>
        <Expenses expenses={expenses} />
      </section>
    </div>
  );
}

export default App;