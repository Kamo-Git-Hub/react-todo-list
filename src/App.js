import React from 'react';
import TodoContainer from './Layouts/todo-container';



const App =(props)=>{
  return(
    <div className={"container"}>
      <TodoContainer/>
    </div>
  )
}


export default App;
                  //FROM DEVELOPER
// The program was developed with the use of reduction modules,
//  reagi-reduction, reduction form. I also used the Css Materialize and google fonts library. 
//  I split the program into small components and commented out my code so that 
//  it could be easily reproduced and read.
//  To write the main functionality, I used redux and hooks
