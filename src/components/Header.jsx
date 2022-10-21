import React, { useState } from 'react'
import '../components/style.css'

function Header() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [saved, setSaved] = useState([])
    const [removed, setRemoved] = useState([])

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const current = new Date();
    let day = days[current.getDay()];
    

    // clearing the value in the input field by clear button
    function reset(e) {
        e.preventDefault();
        setTodo('');
    }

    function addTodo(e) {
        setTodos([...todos, { id: Date.now(), text: todo, time: Date().toLocaleString() }])
        e.preventDefault();
        setTodo('');
    }




    return (
        <div className='container'>
            <div className='pt-5'>
                <h1 className='todo-list'>TODO List</h1>
            </div>
            <div className='para1 pt-2'>
                <h3>Hello <span className='day'>!</span> Welcome on  <span className='day'>{day}</span></h3>
            </div>

            <div className='pt-5'>
                <input className='input-form' type='text' placeholder='📝 Enter something.......' value={todo} onChange={(event) => setTodo(event.target.value)}></input>
                <i className="fa-solid fa-eraser icon" onClick={reset}></i>
                <i className="fa-solid fa-plus icon1" onClick={addTodo}></i>
            </div>

            <div className='table'>

                <div className='saved'>
                    <div className='table-recent'>
                        <h3>SAVED</h3>
                        {
                            saved.map((value) => {
                                return (
                                    <div className='p-2'>

                                        <i className="fa-solid fa-arrows-rotate icon2" onClick={() => {
                                            setSaved(saved.filter(val => {
                                                if (val.id === value.id) {
                                                    setTodos([...todos, { id: value.id, text: value.text, time: Date().toLocaleString() }])
                                                    return val.id !== value.id
                                                }
                                                return val
                                            }))
                                        }}></i>
                                        <input className='input-form1' value={value.text} type="text" ></input>
                                        <i className="fa-solid fa-trash-can icon3" onClick={() => {
                                            setSaved(saved.filter(trash => {
                                                if (trash.id === value.id) {
                                                    alert("Are you Sure? moving to trash !")
                                                    setRemoved([...removed, { id: value.id, text: value.text, time: Date().toLocaleString() }])
                                                    return trash.id !== value.id
                                                }
                                                return trash
                                            }))
                                        }}></i>
                                        <div>
                                            <small>{value.time}</small>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='recent'>
                    <div className='table-recent'>
                        <h3>RECENT</h3>
                    </div>
                    {
                        todos.map((obj) => {
                            return (
                                <div className='p-2'>

                                    {/* tick icon code */}
                                    <i className="fa-solid fa-check-to-slot icon2" onClick={() => {
                                        // console.log(obj);
                                        setTodos(todos.filter(obj2 => {
                                            if (obj2.id === obj.id) {
                                                setSaved([...saved, { id: obj.id, text: obj.text, time: Date().toLocaleString() }])
                                                return obj2.id !== obj.id
                                            }
                                            return obj2
                                        }))
                                    }} value={obj.sStatus} ></i>

                                    {/*input field */}
                                    <input className='input-form1' value={obj.text} type="text" readOnly></input>

                                    {/* minus icon code */}
                                    <i className="fa-solid fa-square-minus icon3" onClick={() => {
                                        setTodos(todos.filter(obj3 => {
                                            if (obj3.id === obj.id) {
                                                setRemoved([...removed, { id: obj.id, text: obj.text, time: Date().toLocaleString() }])
                                                return obj3.id !== obj.id
                                            }
                                            return obj3
                                        }))
                                    }}></i>
                                    <div>
                                        <small>{obj.time}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='deleted'>
                    <div className='table-recent'>
                        <h3>TRASH BIN</h3>
                    </div>
                    {
                        removed.map((value) => {
                            return (
                                <div className='p-2'>
                                    <i className="fa-solid fa-arrows-rotate icon2" onClick={() => {
                                        setRemoved(removed.filter(val => {
                                            if (val.id === value.id) {
                                                setTodos([...todos, { id: value.id, text: value.text, time: Date().toLocaleString() }])
                                                return val.id !== value.id
                                            }
                                            return val
                                        }))
                                    }}></i>
                                    <input className='input-form1' value={value.text} type="text" ></input>
                                    <i className="fa-solid fa-trash icon3" onClick={() => {
                                        setRemoved(removed.filter(val1 => {
                                            if (val1.id === value.id) {
                                                alert("Are you Sure? Delete Permently !")
                                                return val1.id !== value.id
                                            }
                                            return val1
                                        }))
                                    }}></i>
                                    <div>
                                        <small>{value.time}</small>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default Header

