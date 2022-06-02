import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addExpense } from './redux/actions/actions';
import Expenses from './Components/Expenses';

function App() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const [data, setData] = useState({
    title: '',
    price: '',
    date: ''
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addExpense(data));
    setData({
      title: "",
      price: "",
      date: ""
    })
  }

  return (
    <div className="App">
      <section>
        <h1>Redux practic</h1>
        <form onSubmit={submitHandler}>
          <div className='control'>
            <label>Title</label>
            <input type="text" name="title" value={data.title} onChange={inputHandler} />
          </div>
          <div className='control'>
            <label>Title</label>
            <input type="number" name="price" value={data.price} onChange={inputHandler} />
          </div>
          <div className='control'>
            <label>Title</label>
            <input type="date" name="date" value={data.value} onChange={inputHandler} />
          </div>
          <button>Add</button>
        </form>
        <Expenses expenses={expenses} />
      </section>
    </div>
  );
}

export default App;