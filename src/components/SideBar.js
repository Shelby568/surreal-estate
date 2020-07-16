import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

const BuildQueryString = (operation, valueObj) => {
  const { search } = useLocation();

  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => (

  <div className="sidebar">
    <ul className="sidebar-links">
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
      </li>
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
      </li>
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
      </li>
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
      </li>
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { price: +1 })}>Price Ascending</Link>
      </li>
      <li className="sidebar-link">
        <Link to={BuildQueryString('query', { price: -1 })}>Price Descending</Link>
      </li>
    </ul>
  </div>
);

export default SideBar;
