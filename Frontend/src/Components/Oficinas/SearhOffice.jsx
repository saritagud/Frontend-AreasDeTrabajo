import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchOffices } from '../../api/officeApi';
import { searchOfficesRequest, searchOfficesSuccess, searchOfficesFailure, setCurrentPage } from '../../features/office/officeSlice';

export default function SearchOffice() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (event) => {
    event.preventDefault();
    dispatch(searchOfficesRequest());
    try {
      const response = await searchOffices(searchTerm);
      dispatch(searchOfficesSuccess(response));
      dispatch(setCurrentPage(1));
    } catch (error) {
      dispatch(searchOfficesFailure(error));
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} style={{ display: 'flex' }}>
        <input
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            outline: 'none',
            width: '100%',
            marginRight: '1rem',
          }}
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Busca tu oficina ideal..."
        />
        <button
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            backgroundColor: '#4f46e5',
            color: 'white',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}
