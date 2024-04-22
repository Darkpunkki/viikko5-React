import {useState, useEffect} from 'react';
import {fetchData} from '../lib/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const {getUserById} = useUser();

  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
    );

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const userResult = await getUserById(mediaItem.user_id);
        return {...mediaItem, username: userResult.username};
      }),
    );

    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

const useUser = () => {
  const getUserById = async (userId) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + userId,
    );
    console.log(userResult);
    return userResult;
  };
  return {getUserById};
};

export {useMedia, useUser};
