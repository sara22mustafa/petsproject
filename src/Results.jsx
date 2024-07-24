import Pet from './Pet';

export default function Results({ pets }) {
  if (pets.length === 0) {
    return <h1>No pets</h1>;
  }

  return (
    <div className="search">
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))}
    </div>
  );
}
