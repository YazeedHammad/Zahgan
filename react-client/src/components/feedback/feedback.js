import React ,{ Component} from 'react'
import $ from 'jquery';


class Feedback extends React.Component {


  state = {
     feedback : null
  };

handleChange = (event)=>{
    this.setState({
      [event.target.id]:event.target.value

  })
}

handleSubmit = (event)=>{

   var obj = {
    feedback: this.state.feedback
  }

// post requst using ajax 
$.ajax({
  type: "POST",
  url: '/feedback',
  data: {
      obj
  },
  success: function (data) {
      console.log("yazeed data", data)
  },
  error: (err) => {

        console.log('err', err);
      }
  
});

event.preventDefault() 

}; 

   render(){
       return(
          <div className='container' >
           <form onSubmit={this.handleSubmit}>
           <div className="createEvent">
              <div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label" >Say Something: </label>
                  <div className="col-sm-10">
                    <input style={{height:100}} id='feedback' className="form-control" placeholder="Say Something <3" onChange = {this.handleChange} />
                  </div>
                </div>
              </div>


              <div className="row">
                <button type="submit" value="create" className="btn btn-primary btn-lg btn-block red"  >Rate Us</button>
              </div>
            </div>
            <br />
          </form >


        </div>               
        
       )
         

   }
}

export default Feedback
