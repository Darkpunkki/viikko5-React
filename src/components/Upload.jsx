import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {postFile, useMedia} from '../hooks/apiHooks';

// Upload.jsx
const Upload = () => {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const {postMedia} = useMedia();

  const doUpload = async () => {
    try {
      const uploadResult = await postFile(file, token);
      console.log('upload result:', uploadResult);
      const postMediaResult = await postMedia(uploadResult, inputs, token);
      console.log('post media result:', postMediaResult);

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handle submit called');
    doUpload();
  };

  const handleInputChange = (event) => {
    console.log('handle input change');
    setInputs({...inputs, [event.target.name]: event.target.value});
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    console.log('handle file change');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);

    setFile(event.target.files[0]);
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://via.placeholder.com/200?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
