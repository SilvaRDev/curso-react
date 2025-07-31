import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    { id: 1, model: 'Opala', branch: 'Chevrolet', km: 177000, newCar: false },
    { id: 2, model: 'Gol', branch: 'Volkswagen', km: 77111, newCar: false },
    { id: 3, model: 'Corsa', branch: 'Chevrolet', km: 90876, newCar: false },
    { id: 4, model: 'Tracker', branch: 'Chevrolet', km: 0, newCar: true },
    { id: 5, model: 'Fastback', branch: 'Fiat', km: 0, newCar: true },
    { id: 6, model: 'Uno (c/escada)', branch: 'Fiat', km: 837532, newCar: false },
  ]

  return (
    <>
      <h1>Veículos disponíveis</h1>
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          model={car.model}
          branch={car.branch}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </>
  )
}

export default App
