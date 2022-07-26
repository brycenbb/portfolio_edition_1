import { useState } from 'react';

function Image({ imageArr }) {
  const [currImage, setImage] = useState(0);

  function nextImage() {
    setImage((currImage + 1) % imageArr.length);
  }

  return (
    <img
      className={imageArr.length > 1 ? 'imageHover' : ''}
      src={imageArr[currImage].fields.file.url}
      onClick={nextImage}
      alt="project array"
    ></img>
  );
}

export default Image;
