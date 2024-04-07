import React from 'react'

export default function SearchBar({setQuery}) {

    
  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input onChange={(e)=> {setQuery()}} type="text" placeholder="Search for a country..." />
    </div>
  )
}