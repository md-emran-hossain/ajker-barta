import React, { useEffect, useState } from 'react';
import styles from '../../styles/Covid.module.css'

const AllCountry = () => {
  const [countries, setCountries] = useState()
  const [matchedCountries, setMatchedCountries] = useState([])

  //getting data from api
  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(res => res.json())
      .then(data => {
        setCountries(data.Countries)
        setMatchedCountries(data.Countries)
      })
  }, [])

  //search functionality
  const handleSearch = (e) => {
    let newCountries;
    if (e.target.name === 'search') {
      let searchText = e.target.value;
      newCountries = countries.filter(country => country.Country.toLowerCase().includes(searchText.toLowerCase()))
    }
    setMatchedCountries(newCountries)
  }

  //sort functionality
  const handleSort = (e) => {
    let newCountries;
    if (e.target.value === "Sort By Name") {
      newCountries = countries?.sort((a, b) => {
        var nameA = a.Country.toUpperCase();
        var nameB = b.Country.toUpperCase();
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }).slice(0)
    } else if (e.target.value === "Sort By Top Cases") {
      newCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed).slice(0)
    } else if (e.target.value === "Sort By Top Deaths") {
      newCountries = countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths).slice(0)
    } else if (e.target.value === "Sort By Low Cases") {
      newCountries = countries.sort((a, b) => a.TotalConfirmed - b.TotalConfirmed).slice(0)
    } else if (e.target.value === "Sort By Low Deaths") {
      newCountries = countries.sort((a, b) => a.TotalDeaths - b.TotalDeaths).slice(0)
    } else {
      newCountries = [...matchedCountries]
    }
    setMatchedCountries(newCountries)
  }

  //filter functionality
  const handleFilter = (e) => {
    let newCountries;
    if (e.target.value === "Top 10 Cases") {
      newCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)?.slice(0, 10)
    } else if (e.target.value === "Top 20 Cases") {
      newCountries = countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)?.slice(0, 20)
    } else if (e.target.value === "Top 10 Deaths") {
      newCountries = countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths)?.slice(0, 10)
    } else if (e.target.value === "Top 20 Deaths") {
      newCountries = countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths)?.slice(0, 20)
    } else {
      newCountries = [...matchedCountries]
    }
    setMatchedCountries(newCountries)
  }

  let count = 1;
  return (
    <div className={styles.countriesUpdate}>
      <div className='container'>
        <h2 className={styles.title}>Countries Update</h2>
        <div className={styles.searchBar}>
          <input onChange={handleSearch} name='search' type="text" placeholder='search..' />
          <div>
            <input onChange={handleFilter} type="text" name='filter' placeholder='Flter By' list="filterList" />
            <datalist id="filterList">
              <option value="Top 10 Cases" />
              <option value="Top 20 Cases" />
              <option value="Top 10 Deaths" />
              <option value="Top 20 Deaths" />
            </datalist>
          </div>
          <div>
            <input onChange={handleSort} type="text" name='sort' placeholder='Sort By' list="sortList" />
            <datalist id="sortList">
              <option value="Sort By Name" />
              <option value="Sort By Top Cases" />
              <option value="Sort By Top Deaths" />
              <option value="Sort By Low Cases" />
              <option value="Sort By Low Deaths" />
            </datalist>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Serial</td>
                <td>Country</td>
                <td>Total Cases</td>
                <td>New Cases</td>
                <td>Total Deaths</td>
                <td>New Deaths</td>
                <td>Total Recovered</td>
                <td>New Recovered</td>
              </tr>
            </thead>
            <tbody>
              {
                matchedCountries?.map(data => <tr key={data.ID}>
                  <td>{count++}</td>
                  <td className={styles.nameFlag}>
                    <img src={`	https://disease.sh/assets/img/flags/${data.CountryCode.toLowerCase()}.png`} alt="" />
                    <p>{data.Country}</p>
                  </td>
                  <td style={{ color: "#18dcff" }}>
                    {data.TotalConfirmed}
                  </td>
                  <td style={{ textAlign: "center", color: "#f368e0" }}>
                    {data.NewConfirmed}
                  </td>
                  <td style={{ textAlign: "center", color: "#0be881" }}>
                    {data.TotalDeaths}
                  </td>
                  <td style={{ textAlign: "center", color: "#ff4d4d" }}>
                    {data.NewDeaths}
                  </td>
                  <td style={{ textAlign: "center", color: "#feca57" }}>
                    {data.TotalRecovered}
                  </td>
                  <td style={{ textAlign: "center", color: "#2e86de" }}>
                    {data.NewRecovered}
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCountry;