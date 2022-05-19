import './employes-add.css'
import {Component} from 'react'


export default class EmployesAdd extends Component  {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      salary: '',
      key: ''
    }
    
    this.maxId = 4
  }

  

  render(){
    const newObj = {
      name: '',
      salary: '',
      key: ''
    }
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form 
              className="add-form d-flex">
            <input type="text" 
            value={this.state.name}
            className="form-control new-post-label" 
            placeholder="Как его зовут?"
            onChange={(e) =>{
              let name = e.target.value;
              this.setState({...this.state, name})
            }}
            />
  
            <input type="number"
            value={this.state.salary}
                   className="form-control new-post-label" 
                   placeholder="З/П в $?"
                   onChange={(e) =>{
                    let salary = e.target.value;
                    this.setState({...this.state, salary})
                  }}
                   />
  
            <button type="button"
                    className="btn btn-outline-light"
                    onClick={(e) =>{
                      e.preventDefault();
                      const key = this.maxId++
                      this.setState({...this.state, key})
                      if(this.state.name.length > 2 && this.state.salary.length > 0){
                        this.props.setEmployData([...this.props.employ, {...this.state}])
                      }
                          
                        
                    }}
            >Добавить</button>
        </form>
      </div>
      
    )
  }
}

