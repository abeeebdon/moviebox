const Card = ({ edition, name, type, src }) => {
  return (
    <div className="movie">
      <div className="image">
        <img src={src}></img>
      </div>

      <p className="edition">{edition}</p>
      <h3>{name}</h3>
      <div className="rating"></div>
      <p className="type">{type}</p>
    </div>
  )
}
export default Card
