import React,{useEffect,useState} from 'react';
import './style.css';

 

function  App () {
  let data= {title:'waiting for data from server to response'}
 const [todo,setTOdo] = useState(data);
 const[isData,setData] = useState(false)
 const [isFetching,setFetching] = useState(false);

 // useEffect being clalled only for the chnages we apply :)
  useEffect(()=>{
    async function getData() {
      setFetching(true);
      const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log('Response =',response)

      //const data= response.json(); 
      let data2= await response.json()
       setTOdo(data2);   
      setFetching(false)
      console.log('data =' , todo)
    }
getData();
  },[isData]); 
  if(isFetching) {
    return <div>Data Loading.....</div>
  }
  
  return (
    <div className='h1'>
      Hello feTcH TitLE..  :) 
      
        <span> <br></br>{todo.title}</span>
    </div>
  );
}

export default App;