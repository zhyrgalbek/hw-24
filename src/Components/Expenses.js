import ExpensesItem from "./ExpensesItem";
import {deleteExpenses} from '../redux/actions/actions';
import { useDispatch } from 'react-redux';

function Expenses(props) {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteExpenses(id));
    }

    return (
        <ul>
            {
                props.expenses.map((item, index) => {
                    return (
                        <ExpensesItem 
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            date={item.date}
                            deleteHandler={deleteHandler}
                            index={index}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Expenses;