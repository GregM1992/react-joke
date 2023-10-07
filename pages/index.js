import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Joke from '../components/Joke';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get Joke');

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        delivery: obj.delivery,
      });
      setBtnText('Get Punchline');
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <Joke joker={joke} btnText={btnText} />
      {btnText === 'Get Joke' || btnText === 'Get New Joke' ? (
        <Button type="button" onClick={getAJoke}>
          {btnText}
        </Button>
      ) : (
        <Button onClick={() => setBtnText('Get New Joke')}>{btnText}</Button>
      )}
    </div>
  );
}

export default Home;
