import React from 'react';

function Credits() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <h2 className='footerCredits'>
        &copy; {year} <a href='github.com/josh114'>Joshua Kenedinum</a>
      </h2>
    </div>
  );
}

export default Credits;
