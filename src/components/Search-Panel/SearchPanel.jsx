import {useState} from 'react'
import './search-panel.css'

function SearchPanel(props) {
  const [term, setTerm] = useState('')

  function onUpdateTerm(e){
    const term = e.target.value;
    setTerm(term)
    props.updateTerm(term)
  }
  return (
    <input 
    onChange={onUpdateTerm}
    value={term}
    className='search-input search-panel'
    type="text"
    placeholder='Найти сотрудника' />
  )
}

export default SearchPanel