

function Form(props) {
    return (
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
    )
}

export default Form;