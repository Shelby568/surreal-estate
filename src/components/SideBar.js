import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import '../styles/SideBar.css';

const SideBar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  const history = useHistory();

  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString('query', { title: { $regex: query } });
    history.push(newQueryString);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="sidebar">
      <form className="search-form" onSubmit={handleSearch} onChange={handleChange}>
        <div className="input">
          <input type="text" className="side-input" value={query} placeholder="Search properties.." onChange={handleChange} />
          <button type="submit" className="side-button">Search</button>
        </div>
        <ul className="sidebar-links">
          <div className="sidebar-title">Filter By City</div>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
          </li>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
          </li>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
          </li>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
          </li>
          <div className="sidebar-title">Sort By Price</div>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('sort', { price: 1 })}>Ascending</Link>
          </li>
          <li className="sidebar-link">
            <Link className="link" to={buildQueryString('sort', { price: -1 })}>Descending</Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SideBar;
