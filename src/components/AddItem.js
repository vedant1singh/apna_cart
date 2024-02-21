import React from "react";
class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:0,
        }
    }
    state = {  } 
    render() { 
        return (
            <form className="row mb-5" onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.state.productName, this.state.productPrice);

            }}>
            <div className="mb-3 ">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputName" name="productName" aria-describedby="name" onChange={(e)=>{
                this.setState({productName: e.currentTarget.value});
              }} value={this.state.productName}/>
              
            </div>
            <div className="mb-3 ">
              <label htmlFor="inputPrice" className="form-label">Price</label>
              <input type="number" className="form-control" id="price" name="productPrice" onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)})
              }} value={this.state.productPrice}/>
            </div>
            
            <button type="submit" className="btn btn-primary" >Add</button>
          </form>
        );
    }
}
 
export default AddItem;