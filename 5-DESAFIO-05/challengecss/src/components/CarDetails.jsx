import styles from './CarDetails.module.css'

const CarDetails = ({model, branch, km, newCar}) => {
  return (
    <div className={styles.vehicle_card}>
      <h2>{branch} {model}</h2>
      <p>{km}km</p>
      {newCar ? (<p className={styles.new_vehicle}>Veículo novo</p>) : (<p className={styles.used_vehicle}>Usados / Seminovos</p>)}
    </div>
  )
}

export default CarDetails