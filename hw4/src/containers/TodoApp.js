import { useState } from 'react'
import ListItem from '../components/ListItem';

const TodoApp = () => {
  const [view, setView] = useState("all");
  const [id, setId] = useState(0);
  const [left, setLeft] = useState(0);
  const [itemList, setItemList] = useState([]);

  const style = {
    color: 'white',
    backgroundColor: 'white'
  }

  const existCompleted = (list) => {
    return list.status === 'completed';
  }

  const addInput = (e) => {
    if(e.key === 'Enter' && e.target.value !== ""){
        let inputItem = {id: id, text: e.target.value, status: 'active'};
        setId(id+1);
        setLeft(left+1);
        setItemList([...itemList,inputItem]);
        e.target.value = "";
    }
  }

  const checkItem = (item) =>{
    if(item.status === 'active'){
      item.status = 'completed';
      setLeft(left-1);
    } else {
      item.status = 'active';
      setLeft(left+1);
    } 
  }

  const deleteItem = (item) => {
    let index = itemList.indexOf(item);
    itemList.splice(index,1);
    setItemList([...itemList]);
    setLeft(left-1);
  }

  const clearCompleted = () => {
    let tempList = itemList.filter(item => item.status === 'active');
    setItemList([...tempList]);
  }
  
  return (
    <div id="root" className="todo-app__root">
      <header className="todo-app__header">
        <h1 className="todo-app__title">todos</h1>
      </header>
      <section className="todo-app__main">
        <input className="todo-app__input" id="todo-input" placeholder="What needs to be done?" onKeyPress={addInput}/>
        <ul className="todo-app__list" id="todo-list">
          {
            view === 'all'?(
              itemList.map(item => {
                return(
                  <ListItem key={item.id} id={item.id} text={item.text}
                  checkClick={()=>checkItem(item)}
                  deleteClick={()=>deleteItem(item)}
                  checked={item.status === 'completed'}/>
                );
              })  
            ): view === 'active'?(
              itemList.filter(item => item.status === 'active').map(item => {
                return(
                  <ListItem key={item.id} id={item.id} text={item.text}
                  checkClick={()=>checkItem(item)}
                  deleteClick={()=>deleteItem(item)}
                  checked={item.status === 'completed'}/>
                );
              })
            ):(
              itemList.filter(item => item.status === 'completed').map(item => {
                return(
                  <ListItem key={item.id} id={item.id} text={item.text}
                  checkClick={()=>checkItem(item)}
                  deleteClick={()=>deleteItem(item)}
                  checked={item.status === 'completed'}/>
                );
              })
            )
          }
        </ul>
      </section>
        {
          itemList[0]?(
            <footer className="todo-app__footer" id="todo-footer">
              <div className="todo-app__total">{left} left</div>
              <ul className="todo-app__view-buttons">
                <button id="all-button" onClick={()=>setView("all")}>All</button>
                <button id="active-button" onClick={()=>setView("active")}>Active</button>
                <button id="completed-button" onClick={()=>setView("completed")}>Completed</button>
              </ul>
              <div className="todo-app__clean">
                {itemList.some(existCompleted)?
                (<button id="clean-button" onClick={clearCompleted}>Clear completed</button>):
                (<button id="clean-button" style={style}>Clear completed</button>)
                }
              </div>
            </footer>
          ):null
        } 
    </div>
  );
}

export default TodoApp;
