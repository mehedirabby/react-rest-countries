import './App.css';

import Countries from './Components/Countries/Countries';



function App() {
  return (
    <div className="App">
      
        <Countries></Countries> 
        

      
         
   </div>
  );
}
export default App;
// function LoadCountries(){
//   const [countries,setCountries]=useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting Every Country in the world</h1> 
//       <h3>available:{countries.length}</h3>
//       {
//         countries.map(country=><Country name={country.name.official} population={country.population} ></Country>)
//       }
//     </div>
//   )
// }

//  






