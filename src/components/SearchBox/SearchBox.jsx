import React from 'react'
import styles from "./searchBox.module.css"
import { useSelector, useDispatch } from "react-redux"
import { changeFilter, selectNameFilter} from "../../redux/filtersSlice"


const SearchBox = () => {

  const dispatch = useDispatch()
  const filterText = useSelector(selectNameFilter); 

  const handleChange = (e) => {
  dispatch(changeFilter(e.target.value)); 

};

  return (
        <div className={styles.element}>
        <p> Find contacts by name</p>

        <input className={styles.inp} type="text"
          placeholder="Input name or number here"
          value={filterText}
          onChange={handleChange} />
        
        </div>
        )}


export default SearchBox;
