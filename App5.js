import React,{Component} from 'react';
import './App.css';
import Media from './Components/Media';

class App5 extends Component{
    render(){
        return(
            <div className="App container col-sm-6">
  <Media image="React.png" title="React JS">  
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
          scelerisque ante sollicitudin. Cras purus odio, vestibulum  
          in vulputate at, tempus viverra turpis  
 </Media>  
<Media image="Angular.png" title="Angular JS">  
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus  
          scelerisque ante sollicitudin. Cras purus odio, vestibulum  
          in vulputate at, tempus viverra turpis  
</Media> 
</div> 
        );
    }
}

export default App5;