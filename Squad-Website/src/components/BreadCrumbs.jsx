import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const locations = pathname.split('/').filter((x) => x);

  const buildPath = (index) => {
    return '/' + locations.slice(0, index + 1).join('/');
  };

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {locations.length > 0 && <Link to='/'>Home</Link>}
      {locations.map((name, index) => (
        <span key={index}>
          / <Link to={buildPath(index)}>{decodeURIComponent(name)}</Link>
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
