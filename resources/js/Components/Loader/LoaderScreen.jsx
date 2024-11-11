import React from 'react';
import Spinner from '../../../assets/loading.svg';

export default function LoaderScreen() {
  return (
    <div className='loader__wrapper'>
      <img src={Spinner} alt="Loader Screen..." />
    </div>
  );
}
