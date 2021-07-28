import React, { Component } from 'react'


export default class Search extends Component {

    state={
        term:""
    }

    handleOnChange=(event)=>
    {
        this.setState({term: event.target.value})
    }
    handleOnSubmit=(event)=>
    {

        event.preventDefault();
        console.log(this.state.term)
        
        this.props.searchCampsbyCity(this.state.term)

    }
   

    render() {
        return (
<form onSubmit={this.handleOnSubmit} >


            <div className="input-group" style={{display:"flex",justifyContent:"center",}}>
            <div className="form-outline">
              <input onChange={this.handleOnChange} type="search" id="form1" className="form-control" value={this.state.term} />
              <label className="form-label" for="form1">Search</label>
            </div>
            <button    type="submit" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
          </form>
        )
    }
}
