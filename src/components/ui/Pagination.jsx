/* eslint-disable react/prop-types */
import Button from "./Button"
import {MdFirstPage, MdLastPage} from "react-icons/md"

const Pagination = ({
    handleNextPage, handlePrevPage, disabledNext, disabledPrev, page
}) => {

  return (
    <div
    className="flex space-x-4 justify-center items-center my-10 py-10"
    role="navigation"
    aria-label="Pagination Navigation"
    id="pagination"
    >
        <Button
        disabled={disabledPrev}
        icon={MdFirstPage}
        action={handlePrevPage} 
        className="btn-blue"
        />
        <span>
            1 - {page}
        </span>
        <Button
        disabled={disabledNext}
        className="btn-blue"
        action={handleNextPage}
        icon={MdLastPage} 
        />
    </div>
  )
}

export default Pagination