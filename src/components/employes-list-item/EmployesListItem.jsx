import './employees-list-item.css'

export default function EmployesListItem (props) {
  

  const {name, salary, deleteItem, id, changeInc, increase, like, changeLike} = props
  
  let styles = "list-group-item d-flex justify-content-between"
  if(increase){styles += " increase"}
  if(like){ styles += ' like'}
  
  return (
    <li className={styles}>
      <span 
      onClick={() =>{
        changeLike()
      }}
      className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
        onClick={() =>{
          changeInc()
        }}
        
        className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
        onClick={() =>{
          deleteItem(id)
        }}
        className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
 }

