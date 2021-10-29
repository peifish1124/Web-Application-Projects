import x from './../img/x.png';


const ListItem = (inputItem) => {
    return(
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
                <input id={inputItem.id} type="checkbox" checked={inputItem.checked}
                    onChange={inputItem.checkClick}/>
                <label htmlFor={inputItem.id}/>
            </div>
            <h1 className="todo-app__item-detail"
                style={{
                    textDecoration: inputItem.checked ? 'line-through' : 'none',
                    opacity: inputItem.checked ? 0.5 : 1
                }}
            >{inputItem.text}</h1>
            <img className="todo-app__item-x" src={x} onClick={inputItem.deleteClick}/>
        </li>
    );
}
export default ListItem;