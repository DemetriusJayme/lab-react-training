//Iteracao 1
//Componet IdCard.js

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  //console.log('entrei');

  return (
    <div>
      <img src={picture} alt="profile pic" />
      <div>
        <p>First Name: {firstName}</p>;<p>Last Name: {lastName}</p>;
        <p>Gender: {gender}</p>;<p>Height: {height}</p>;<p>Birth: {birth}</p>;
      </div>
    </div>
  );
}

export default IdCard;
