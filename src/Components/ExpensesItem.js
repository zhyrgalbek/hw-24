import styled, {css} from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0.5em 1em;
    margin-right: 0;
    padding: 0.25em 1em;
    ${props => props.primary && css`
      background-color: palevioletred;
      color: white;
    `}
`;

const Item = styled.li`
  border: 1px solid rgb(22, 58, 73);
  list-style: none;
  background-color: #1D485B;
  padding: 10px 20px;
  color: #A9C3CB;
  display: flex;
  justify-content: space-between;
  ${props=>props.primary && css`
    background-color: #235367;
  `}
`;
const ItemText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

function ExpensesItem(props) {
    return (
        <Item key={props.id} primary={props.index % 2 === 0 ? false:true}>
          <ItemText>
            <span>{props.title}</span>
            <span>{props.price}</span>
            <span>{props.date}</span>
          </ItemText>
          <Button onClick={() => props.deleteHandler(props.id)} primary={props.index % 2 === 0 ? true : false} >X</Button>
        </Item>
    )
}

export default ExpensesItem;