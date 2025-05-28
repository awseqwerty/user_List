const CreateUser = () =>{


    return(
        <form>
            <label htmlFor="name">Имя</label>
            <input id='name' tupe='text'></input>

            <label htmlFor="age">Возраст</label>
            <input id='age' tupe='number'></input>
            <button tupe='submit'>Добавить пользователя</button>
        </form>
    )
}
export default CreateUser;