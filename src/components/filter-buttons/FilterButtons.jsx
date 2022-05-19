import './filter-btn.css'
import {useState} from 'react'
function FilterButtons(props) {

  const [button, setButoon] = useState([
    {name: 'all', label: 'все сотрудники', id:1},
    {name: 'up', label: 'На повышение', id:2},
    {name: '1000', label: 'З/П больше 1000', id:3 }
  ])
   
  const buttons = button.map(i =>{
    const clazz = props.filter === i.name ? 'btn btn-light' : 'btn btn-outline-info';
    return <button className={clazz} key={i.id}type='button' onClick={() =>props.filterEmp(i.name)}>{i.label}</button>
  })
  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default FilterButtons