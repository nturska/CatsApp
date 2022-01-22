import { useEffect, useState } from "react";
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import { GrView } from 'react-icons/gr'

function Pagination ({itemList, changed, setCurrentPagin}, props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [choosing, setChoosing]=useState(false)

    useEffect(() => {
        (!itemList[perPage-1] && currentPage!==1)? setCurrentPage(1) :
        setCurrentPagin((itemList[currentPage*perPage-1])? itemList.slice((currentPage-1)*perPage, currentPage*perPage) :
        itemList.slice((currentPage-1)*perPage))
    },[changed, perPage, currentPage, setCurrentPagin])
    return (
        <div className="Pagination">
        <div id="pageChange">
            <button className="PagButton" disabled={currentPage===1} onClick={()=> {setCurrentPage(currentPage-1)}}>
                <FiChevronLeft className="Icon"/>
            </button>
            <div>{currentPage}</div> 
            <button className="PagButton" disabled={currentPage*perPage>=itemList.length} onClick={()=> {setCurrentPage(currentPage+1)}}>
                <FiChevronRight className="Icon"/>
            </button>
            <button className="PagButton" onClick={() => {setChoosing(!choosing)}}>
                <GrView className="Icon"/>
            </button>
        </div>
        {choosing && 
            <div id="perPage">
                <button className="PagButton" disabled={perPage===6} onClick={() => {setPerPage(6)}}>6</button>
                <button className="PagButton" disabled={perPage===12} onClick={() => {setPerPage(12)}}>12</button>
                <button className="PagButton" disabled={perPage===24} onClick={() => {setPerPage(24)}}>24</button>
            </div>}
        </div>
    )
}

export default Pagination;