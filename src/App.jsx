import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import { useEffect, useState } from 'react';
import { fetchData,setFilter,selectedFilter,deleteTask} from './features/events/eventsSlice';

const App = () => {

const[search,setSearch] = useState('')

  const events = useSelector(selectedFilter)
  console.log(events);

  const dispatch  = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())
  },[])


  const handleFilterChange=(filter)=>{
    dispatch(setFilter(filter));
  }

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div className='App'>

    <div className='nav'>
    <button onClick={() => handleFilterChange('all')}>All</button>
    <button onClick={() => handleFilterChange('upcoming')}>upcoming</button>
    <button onClick={() => handleFilterChange('completed')}>completed</button>
    <div className='form'>
    <input type='text' placeholder='Search Here' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    </div>
  </div>

     <center>
     <table border={1} cellPadding={10} cellSpacing={20}  width={'80%'}>
   <thead>
   <tr>
   <th>Name</th>
   <th>Status</th>
   <th>Actions</th>
   </tr>
   </thead>
   {events.filter((item)=>item.name.includes(search)).map((item)=>{
    return(
      <tbody key={item.id}>
      <tr>
      <td>{item.name}</td>
      <td className={item.status}>{item.status}</td>
      <td>
      <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
      <button>Edit</button>
      </td>
      </tr>
      </tbody>
    )
  })}
   </table>
     </center>
    </div>
  )
}

export default App