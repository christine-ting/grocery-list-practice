import React from 'react';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: '',
      quantity: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);

  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios
      .get('/api')
      .then(res => this.setState({ list: res.data }))
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => { console.log (this.state)})
  }

  submitHandler(event) {
    event.preventDefault();
    var newItem = {};
    newItem.item = this.state.item;
    newItem.quantity = this.state.quantity;
    axios
      .post('/api', newItem)
      .then(() => this.getList())
      .catch((err) => console.error(err))
  }

  deleteHandler(_id) {
    axios
      .delete(`/api/${_id}`)
      .then(() => this.getList())
      .catch((err) => console.error(err))
  }

  updateHandler(_id, qty) {
    var newQty = {};
    newQty.quantity = qty;
    axios
      .put(`/api/${_id}`, newQty)
      .then(() => this.getList())
      .catch((err) => console.error(err)) 
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <form onSubmit={this.submitHandler}>
        <label>Add Grocery:<br/>
          <label>item:&nbsp;</label><input type="text" name="item" onChange={this.changeHandler}/>
          <label>quantity:&nbsp;</label><input type="text" name="quantity" onChange={this.changeHandler}/>
        </label>
          <input type="submit" value="add grocery"/>
        </form>
        <List list={this.state.list} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/>
      </div>
    )
  }

}

export default App;