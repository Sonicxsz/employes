import EmployesListItem from '../employes-list-item/EmployesListItem'
import './employes-list.css'
function EmployesList({data, deleteItem, changeInc, changeLike, filter}) {
  const filtered = data.filter(i =>{
    if(filter == '1000'){
     console.log(i.salary.slice(0, i.salary.length -1))
      return i.salary > +filter
    }
    if(filter === 'up'){
      if(i.increase){
        return i
      }
    }else{
      return i
    }
  })

  const items = filtered.map(i =>{
    return <EmployesListItem 
    changeInc={() =>{
      changeInc(i.key)
    }}
    changeLike={() =>{
      changeLike(i.key)
    }}
    data={data} {...i} id={i.key} key={i.key} deleteItem={deleteItem}/>
  })

  return (
    <ul className="app-list list-group">
      {items}
    </ul>
  )
}

export default EmployesList