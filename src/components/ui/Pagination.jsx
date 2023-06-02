/* eslint-disable react/prop-types */
import Button from "./Button"
import {MdFirstPage, MdLastPage} from "react-icons/md"

const Pagination = ({
    handleNextPage, handlePrevPage, disabledNext, disabledPrev, page
}) => {

  return (
    <div
    className="flex space-x-4 justify-center items-center my-10"
    role="navigation"
    aria-label="Pagination Navigation"
    aria-disabled={disabledPrev === null}
    id="pagination"
    >
        <Button
        disabled={disabledPrev === null}
        icon={MdFirstPage}
        action={handlePrevPage} 
        className="btn-blue"
        />
        <span>
            {page}
        </span>
        <Button
        disabled={disabledNext === null}
        className="btn-blue"
        action={handleNextPage}
        icon={MdLastPage} 
        />
    </div>
  )
}

export default Pagination