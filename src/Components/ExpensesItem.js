import styled, {css} from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    ${props => props.primary && css`
      background-color: palevioletred;
      color: white;
    `}
  `;

function ExpensesItem(props) {
    return (
        <li key={props.id}>
            <span>{props.title}</span>
            <span>{props.price}</span>
            <span>{props.date}</span>
            <Button onClick={() => props.deleteHandler(props.id)} primary={props.index % 2 === 0 ? true : false} >X</Button>
        </li>

    )
}

export default ExpensesItem;