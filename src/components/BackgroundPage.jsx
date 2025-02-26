import React from 'react';

export default function BackgroundPage({children, classN}) {
  return (
    <div className={`position-relative h-auto ${classN}`}>
      <div className="background-grid"></div>
        {children}
    </div>
  )
}


