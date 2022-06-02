export const addExpense = ({title, price, date})=>{
    return {
        type: "ADD",
        title: title,
        price,
        date: date
    }   
}

export const deleteExpenses = (id)=>{
    return {
        type: "DELETE",
        id: id 
    }
}