import './appinfo.css'

function Appinfo(props) {
  return (
    <div className='appinfo'>
      <h1>Учет сотрудников в компании: </h1>
      <h2>Общее число сотрудников: {props.employes}</h2>
      <h3>Премию получать: {props.award}</h3>
    </div>
  )
}

export default Appinfo