import React, { useState, useEffect } from "react";
//başlangıç değerleri
const initialValue = [
  { todoName: "Learn React", isActive: false },
  { todoName: "Learn Javascript", isActive: true },
  { todoName: "Have a life", isActive: false },
];

//varsayılan obje değerleri
const defaultObjValues = { todoName: "", isActive: false };

const Section = () => {
  //tüm dataların tutulduğu state
  const [mainData, setMainData] = useState(initialValue);
  //yeni todo eklenirken ihtiyacımız olan state
  const [newToDo, setNewToDo] = useState(defaultObjValues);
  //filtre yapılırken kontrol edilecek state
  const [filtredName, setFiltredName] = useState("All");

  //tüm veriler
  const allData = mainData.map((todos, index) => {
    return (
      <li className={todos.isActive ? "completed" : ""} key={index}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todos.isActive ? true : false}
            onChange={() => {
              todos.isActive = !todos.isActive;
              setMainData([...mainData]);
            }}
          />
          <label>{todos.todoName}</label>
          <button
            className="destroy"
            onClick={() => {
              let newList = mainData.filter(
                (data) => todos.todoName !== data.todoName
              );
              setMainData(newList);
            }}
          ></button>
        </div>
      </li>
    );
  });
  //bitirilmemiş todo verileri
  const activeData = mainData.filter((data) => !data.isActive).map((todos, index) => {
      return (
        <li className={todos.isActive ? "completed" : ""} key={index}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todos.isActive ? true : false}
              onChange={() => {
                todos.isActive = !todos.isActive;
                setMainData([...mainData]);
              }}
            />
            <label>{todos.todoName}</label>
            <button
              className="destroy"
              onClick={() => {
                let newList = mainData.filter(
                  (data) => todos.todoName !== data.todoName
                );
                setMainData(newList);
              }}
            ></button>
          </div>
        </li>
      );
    });
    //bitirilmiş todo verileri
    const completedData = mainData.filter(data => data.isActive).map((todos, index) => {
      return (
        <li className={todos.isActive ? "completed" : ""} key={index}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todos.isActive ? true : false}
              onChange={() => {
                todos.isActive = !todos.isActive;
                setMainData([...mainData]);
              }}
            />
            <label>{todos.todoName}</label>
            <button
              className="destroy"
              onClick={() => {
                let newList = mainData.filter(
                  (data) => todos.todoName !== data.todoName
                );
                setMainData(newList);
              }}
            ></button>
          </div>
        </li>
      );
    })

  useEffect(() => {
    //ana datamıza ekleme yapıldığında inputun içindeki veriyi boşaltmak için yazılan use effect
    setNewToDo(defaultObjValues);
  }, [mainData]);
  //input içine her veri yazıldığında newToDo state ini güncelleyen fonksiyon
  const onChangeName = (e) => {
    setNewToDo({ ...newToDo, todoName: e.target.value });
  };
  //formumuzda submit işlemi yapıldığında çalışan fonksiyon
  const onSubmitForm = (e) => {
    //refresh engelleyen kod
    e.preventDefault();
    //ana verilerimizin üzerine yeni gelen todoyu ekleyen kod
    setMainData([...mainData, newToDo]);
  };
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmitForm}>
            <input
              name="newToDo"
              className="new-todo"
              placeholder="What needs to be done?"
              value={newToDo.todoName}
              onChange={onChangeName}
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox"  />
          <label htmlFor="toggle-all" onClick={()=>{
            let newList = [...mainData];
            let control = newList.every((todo)=>todo.isActive)
            if(control){
              newList.map((todo, index)=> todo.isActive ? todo.isActive=false : "")
            }
            else{
              newList.map((todo, index)=> todo.isActive === false ? todo.isActive=true : "")
            }
            
            setMainData(newList);
          }} >Mark all as complete</label>

          <ul className="todo-list">
            {filtredName === "Active" ? activeData : filtredName === "Completed" ? completedData : allData}
          </ul>
        </section>

        <footer className={mainData.length === 0 ? "footer d-none" : "footer"}>
          <span className="todo-count">
            <strong>{mainData.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="/#" className={filtredName==="All" ? "selected" : ""} onClick={()=>{setFiltredName("All")}}>
                All
              </a>
            </li>
            <li>
              <a href="/#" className={filtredName==="Active" ? "selected" : ""} onClick={()=>{setFiltredName("Active")}}>Active</a>
            </li>
            <li>
              <a href="/#" className={filtredName==="Completed" ? "selected" : ""} onClick={()=>{setFiltredName("Completed")}}>Completed</a>
            </li>
          </ul>

          <button
            className={
              mainData.some((data) => data.isActive)
                ? "clear-completed"
                : "clear-completed d-none"
            }
            onClick={() => {
              let clearedData = mainData.filter((data) => !data.isActive);
              setMainData(clearedData);
            }}
          >
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Section;
