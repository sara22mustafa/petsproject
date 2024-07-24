import { Link } from 'react-router-dom';
const Pet = ({ id, name, animal, breed, images, location }) => {
  let animalImage = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    animalImage = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={animalImage} alt={name} />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;

// In the provided code snippet, the Link component from react-router-dom is used to create a navigable link that,
//  when clicked, navigates to a URL based on the id of the item. This URL is in the format of /details/${id}, 
// which matches the route defined for the Details component.