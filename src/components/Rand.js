//Iteracao 3
//Component Rand.js

function Rand({ min, max }) {
  return (
    <p>
      Random value between {min} e {max}
    </p>
  );
}

//Math.random() * (max - min) + min;

export default Rand;
