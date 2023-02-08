import React from 'react'
import { numberPage } from '../utils/handlePagination'

const Pagination = ({ setPage, location, RESIDENT_PERPAGE }) => {
  return (
    <ul className='paginationCard__page'>
    {
      numberPage( location, RESIDENT_PERPAGE ).map(numberPage => <li className='paginationCard__list' onClick={ () => setPage( numberPage ) } key={ numberPage }>{ numberPage }</li>)
    }
  </ul>
  )
}

export default Pagination