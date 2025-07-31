const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do Container</h2>
      {children}
      <p>O valor é {myValue}!</p>
    </div>
  )
}

export default Container
