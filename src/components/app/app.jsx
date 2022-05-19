import Appinfo from '../AppInfo/AppInfo'
import {useState} from 'react'
import './app.css'
import SearchPanel from '../Search-Panel/SearchPanel'
import FilterButtons from '../filter-buttons/FilterButtons'
import EmployesList from '../employes-list/EmployesList'
import EmployesAdd from '../employes-add/EmployesAdd'

export default function App() {

  const [employData, setEmployData] = useState([
    {name: 'Kana', salary: '2000', key:2, increase: false, like: false},
    {name: 'Arbi', salary: '1200', key:3, increase: false, like: false},
    {name: 'Ayub', salary: '3000',  key:'ahcb', increase: false, like: false},
    {name: 'Zelim', salary: '22000', key:'jagc', increase: false, like: false}
  ])
  const [filter, setFilter] = useState('all')
  const [term, setTerm] = useState('')


  let employes = employData.length
  let award = employData.filter(i => i.increase).length
  
  function seacrhUpdate(items, term){
    if(term.length === 0){
      return items
    }
      return items.filter(i =>{
        return i.name.toLowerCase().indexOf(term) > -1
      })
    
  }

  function updateTerm(term){
    setTerm(term)
  }

  function filterEmp(filter){
    setFilter(filter)
    console.log(filter)
  }

  function deleteEmp(key){
      const copy = employData.filter((i) =>{
        if(i.key !== key) return i
      })
      setEmployData(copy)
  }
  function changeInc(id) {
   const copy = employData.map(i =>{
      if(i.key === id){
        i.increase = !i.increase
        return i
      }
      return i
   })
   setEmployData(copy)
    
  }

  function changeLike(id) {
    const copy = employData.map(i =>{
       if(i.key === id){
         i.like = !i.like
         return i
       }
       return i
    })
    setEmployData(copy)
     
   }
   
   const visibleData = seacrhUpdate(employData, term)
  return (
    <div className="app">
      <Appinfo award={award} employes={employes} />
      <div className="seacrh-panel-wrapper">
        <SearchPanel updateTerm={updateTerm}/>
        <FilterButtons filter={filter} filterEmp={filterEmp}/>
      </div>
      <div>
        <EmployesList filter ={filter} changeLike={changeLike} data={visibleData} changeInc={changeInc} deleteItem={deleteEmp}/>
      </div>
      <EmployesAdd employ={employData} setEmployData={setEmployData} />
      
    </div>
  )
}

