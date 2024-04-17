import PropTypes from 'prop-types';
import Button from './UI/Button';

const SingleView = (props) => {
  const {selectedItem, setSelectedItem} = props;
  const handleClick = () => {
    setSelectedItem(null);
  };
  return (
    <>
      <dialog
        className=" fixed top-10 h-5/6 bg-black bg-opacity-80 text-stone-100"
        open={selectedItem ? true : false}
      >
        <p>
          <Button text="Close" handleClick={handleClick} />
        </p>
        {selectedItem && (
          <>
            {selectedItem.media_type.includes('video') ? (
              <video controls>
                <source
                  src={selectedItem.filename}
                  type={selectedItem.media_type}
                />
              </video>
            ) : (
              <img src={selectedItem.filename} alt={selectedItem.title} />
            )}
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>
              Created{' '}
              {new Date(selectedItem.created_at).toLocaleString('fi-FI')}
            </p>
            <p>Size: {selectedItem.filesize}</p>
          </>
        )}
      </dialog>
    </>
  );
};

SingleView.propTypes = {
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
