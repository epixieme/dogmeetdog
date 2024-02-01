interface DogProps{
    onClose:()=>void
    dog: any
}

const DogInformationCard = ({ dog, onClose }:DogProps) => {
    return (
      <div key={dog.id} className="dog-card">
        <h2>{dog.name}</h2>
        <img src={dog.imageUrl} alt={dog.name} />
            <div className="dog-info">
            <div>{dog.description}</div>
              <h3>{dog.name[0].toUpperCase() + dog.name.substring(1)}</h3>
            </div>
           
            <i className={`dog-likes ${dog.likes}`}>
              {dog.likes}
            </i>
        <button onClick={onClose}>close</button>
      </div>
    )
  }

  export default DogInformationCard
  