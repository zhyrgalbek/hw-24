const initialState = {
    expenses: [
        {
            title: 'Test', 
            price: 100, 
            date: '2022-06-02', 
            id: 123123
        }
    ]
};

let nextId = 0;

const reducerFunc = (state = initialState, action)=>{
    switch(action.type){
        case "ADD":
            return {
                ...state,
                expenses: [
                    ...state.expenses,
                    {
                        title: action.title,
                        price: action.price,
                        date: action.date,
                        id: nextId++
                    }
                ]
            }
        case "DELETE":
            return {
                ...state,
                expenses: state.expenses.filter((elem)=>elem.id !== action.id)
            }
        default:
            return state
    }
}
export default reducerFunc;