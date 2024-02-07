import Historia from "./components/Historia/Historia"
import MiPrimerComponente from "./components/MiPrimerComponente/MiPrimerComponente"

const App = () => {
  return (
    <div className="w-full h-screen bg-slate-900 gap-4 flex justify-center items-center">
      <MiPrimerComponente saludo={"Hola"} nombre={"David"}/>
      <MiPrimerComponente saludo={"Buenas tardes"} nombre={"Jairo"}/>
    </div>
  )
}

export default App