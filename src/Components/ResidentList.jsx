import React from 'react'
import ResidentCard from './ResidentCard'
import "../Components/styles.css/ResidentList.css"


const ResidentList = ({ pagination }) => {
  return (
    <section className='residentList'>
         {
            pagination()?.map(resident => <ResidentCard key={ resident } resident={ resident }/>)
         }
      </section>
  )
}

export default ResidentList