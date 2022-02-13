import { Component } from "react"

class PostStatusFilter extends Component {
  constructor(props){
    super(props);
    this.buttons = [
      {name: 'All', label: 'All'},
      {name: 'Like', label: 'Like'},
    ]
  }
  render(){
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary'  
      return (

        <button
         key={name} 
         type="button" 
         onClick={() => this.props.onFilterSelect(name)} 
         className={`btn ${clazz}`}
         >{label}</button>
      )
      
    })
    return (
      <>
      <div className="btn-group">
        {buttons}
      </div>
      </>
    )
  }
}

export default PostStatusFilter