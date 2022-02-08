
import './App.css';
import Mensaje from './Mensaje';



const Description = () =>{
  return <p>Esta es la descripcion del curso fullstack bootcamp</p>
}


const App = ()=> {
  // const mensaje = 'Hola mundo desde una varible en un componente'
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos estudiando'/>
      <Mensaje color='green' message='El fullstack bootcamp'/>
      <Mensaje color='blue' message='impartido por midudev'/>
      <Description/>
      {/* {mensaje} */}
    </div>
  );
}

export default App;
