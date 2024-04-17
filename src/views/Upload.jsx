import {useState} from 'react';
import {Link} from 'react-router-dom';

const Upload = () => {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tiedostoa yritetäään lähettää');
    console.log('event', event);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="tiedosto"
          onChange={(event) => setFile(event)}
        />
        <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <button className="bg-blue-500" type="submit">
          Upload file
        </button>
      </form>

      <p>
        <Link to="/"> Back to Home</Link>
      </p>
    </>
  );
};

export default Upload;
