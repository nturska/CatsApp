import {useEffect, useState} from 'react'
import {BsSortAlphaDownAlt, BsSortAlphaDown, BsSortNumericDown, BsSortNumericDownAlt, BsCalendar2Date, BsArrowDown, BsArrowUp} from 'react-icons/bs';

function Sort ({toSort, setToSort, numericValue, changed, setChanged}, props) {
    const [openSelection, setOpenSelection] = useState(false);
    const [sortType, setSortType] = useState("default");
    const [order, setOrder] = useState("");
    useEffect(() =>{
        if (sortType==="age"){
            if(order==="down")
            {setToSort(toSort.sort((a, b) => b.age - a.age)); console.log(toSort)}
            else
            {setToSort(toSort.sort((a, b) => a.age - b.age)); console.log(toSort)}
        }
        if (sortType==="lifespan"){
            if(order==="down")
            {setToSort(toSort.sort((a, b) => b.lifespan_min - a.lifespan_min))}
            else
            {setToSort(toSort.sort((a, b) => a.lifespan_min - b.lifespan_min))}}
        if (sortType==="name"){
            if(order==="up")
            {setToSort(toSort.sort((a, b) => 
            {let fa = a.name.toLowerCase();
             let fb = b.name.toLowerCase();
            if (fa < fb) { return -1; }
            if (fa > fb) { return 1; }
            return 0;}))}
            else
            {setToSort(toSort.sort((a, b) => 
            {let fa = a.name.toLowerCase();
             let fb = b.name.toLowerCase();
            if (fa > fb) { return -1;}
            if (fa < fb) { return 1; }
            return 0;} ))}
        }
        if (sortType==="date"){
            if(order==="down")
            {setToSort(toSort.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            console.log(da - db)
            return da - db;}
            ))}
            else
            {setToSort(toSort.sort((a, b) => {
            let da = new Date(a.date),
                db = new Date(b.date);
            return db - da;}
            ))}
        }
        else{
            setToSort(toSort) }
        setChanged(changed+1)
        },[sortType, toSort, order, setToSort, setChanged]);
        

    return (
        <div className='Sort'>
        { openSelection &&
            <div className='Sort'>
            <button className='SortButton' onClick={()=> {setSortType("name"); setOrder("down")}}>
                <BsSortAlphaDownAlt className='Icon'/>
            </button>
            <button className='SortButton' onClick={()=> {setSortType("name"); setOrder("up")}}>
                <BsSortAlphaDown className='Icon'/>
            </button>
            <button className='SortButton' onClick={()=> {setSortType(numericValue); setOrder("down")}}>
                <BsSortNumericDownAlt className='Icon'/>
            </button>
            <button className='SortButton' onClick={()=> {setSortType(numericValue); setOrder("up")}}>
                <BsSortNumericDown className='Icon'/>
            </button>
            <button id='DateButton' className='SortButton'onClick={()=> {setSortType("date"); setOrder("down")}}>
                <BsArrowDown className='DateIcon'/><BsCalendar2Date className='DateIcon'/></button>
            <button id='DateButton' className='SortButton' onClick={()=> {setSortType("date"); setOrder("up")}}>
                <BsArrowUp className='DateIcon'/><BsCalendar2Date className='DateIcon'/>
            </button>
            </div>
        }
        <button onClick={() => {setOpenSelection(!openSelection)}} id='OpenSortButton'>sort by: {sortType} {order}</button>
        </div>
    );
}
export default Sort;