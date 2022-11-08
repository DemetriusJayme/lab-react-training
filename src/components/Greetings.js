//Iteracao 2
//Component Greetings.js

function Greetings({ lang, children }) {
  return (
    <p>
      {lang === 'de' ? 'Hallo ' : 'Bonjour '}
      {children}
    </p>
  );
}

export default Greetings;
