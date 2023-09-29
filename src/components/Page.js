import React from 'react';
const Page = ({currPage,setCurrPage,nPages}) => {
    const disable = currPage==1 ? 'disabled':'';
    const prevPage = (id)=>{
        if(id===1){
            return
        }
        else{
            setCurrPage(id-1);
        }
      }
      const nextPage = (id)=>{
        if(id===(nPages+1)){
            return
        }
        else{
            setCurrPage(id+1);
        }
      }
  return (
    <nav>
    <ul className="pagination justify-content-center">
      <li class={`page-item ${disable} `}>
        <a onClick={()=> prevPage(currPage)} className="page-link">Previous</a>
      </li>
      <li className="page-item active">
        <a className="page-link">
          {currPage}
        </a>
      </li>
      <li className="page-item" >
        <a className="page-link">
          {currPage+1}
        </a>
      </li>
      <li className={`page-item ${currPage===(nPages+1) ? 'disabled':''} `}>
        <a onClick={()=> nextPage(currPage)} class="page-link">
          Next
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default Page