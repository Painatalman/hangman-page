import React from 'react';

import { useYourHead } from '~/features/profile/hooks';

function GameHeadField() {
  const [headSrc, setHeadSrc] = useYourHead();

  return (
    <label>
      Head image URL
      <input
        type="text"
        value={headSrc}
        onChange={e => setHeadSrc(e.target.value)}
      />
    </label>
  );
}

export default GameHeadField;
