import { Button, Pagination } from '@nextui-org/react';
import React from 'react'

const PaginationHook = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div className="w-full">
      <Pagination
        total={10}
        color="primary"
        page={currentPage}
        onChange={setCurrentPage}
        showControls
        showShadow={true}
        classNames={{
          wrapper: "mx-auto my-10",
        }} 
      />
    </div>
  )
}

export default PaginationHook