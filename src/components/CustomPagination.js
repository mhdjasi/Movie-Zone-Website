import { Pagination, } from '@mui/material'
import React from 'react'
import './CustomPagination.css'



function CustomPagination({ setPage, numOfPages = 10 }) {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

  return (
    <div >



<div className='pagination'>
    <Pagination variant="text" onChange={(e) => handlePageChange(e.target.textContent)}  count={numOfPages} color="secondary" />

</div>  


    </div>
  )
}

export default CustomPagination