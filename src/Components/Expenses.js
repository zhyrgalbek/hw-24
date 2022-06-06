import ExpensesItem from "./ExpensesItem";
import {deleteExpenses} from '../redux/actions/actions';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

const List = styled.ul`
    /* border: 1px solid green; */
    width: 500px;
    margin: 0 auto;
    padding: 0
`;

function Expenses(props) {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteExpenses(id));
    }

    return (
        <List>
            {
                props.expenses.map((item, index) => {
                    return (
                        <ExpensesItem 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            date={item.date}
                            deleteHandler={deleteHandler}
                            index={index}
                        />
                    )
                })
            }
        </List>
    )
}

export default Expenses;