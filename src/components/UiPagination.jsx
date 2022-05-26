import React from 'react';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const UiPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }
  return (
    <div className="pagination__display">
        <ThemeProvider theme={darkTheme}>
          <Pagination className="pagination__color" count={numOfPages} 
          onChange={(e) => handlePageChange(e.target.textContent)} color="primary"
          hideNextButton
          hidePrevButton
          />
        </ThemeProvider>
    </div>
  )
}

export default UiPagination