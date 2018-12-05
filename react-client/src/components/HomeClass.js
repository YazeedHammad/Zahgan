import React from 'react'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import About from './About'

import EventClass from './EventClass'
import Create from './create'
import Slideshow from './Slider/Slideshow';
import Vision from './Vision';

class HomeClass extends React.Component {
constructor(props){
    super(props)
    this.myRef = React.createRef();
    
}
scrollToMyRef = () => {
    window.scrollTo({
        top:this.myRef.current.offsetTop, 
        behavior: "smooth"
    })
}
render(){
    console.log("HomeClass",this.props.items)
    return(
       
  <div>
			 <Slideshow />
       <Vision/>
			<div className="container-fluid" >
			
      	<div classsName="images">
        {
 this.props.items.map((item) =>{
   return(<div ref={this.myRef}>
    <EventClass item={item}/>
    </div>)
 
})

        }  
        
				</div>
				
			</div>
   
              </div>
    )
}
}

export default HomeClass
