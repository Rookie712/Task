import React, { useEffect, useState } from "react";
import Data from "../store/dataTable.json";
import classes from './Table.module.css';
import "bootstrap/dist/css/bootstrap.css";
import Page from "./Page";

const Table = () => {
  const [currPage, setCurrPage] = useState(1);
  const keys = Object.keys(Data[0]);
  const [filterData,setFilterData] = useState(Data)
  const recordsPerPage = 100;
  const lastIndex = currPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const newData = filterData.slice(firstIndex, lastIndex);
  const nPages = Math.ceil((filterData.length / recordsPerPage));
  const updateData = (data,id)=>{
    if(id==='SYMBOL'||id==='OPTION_TYP' || id==='INSTRUMENT'){
    const newD = Data.filter((item) => item[id]===data);
    setFilterData(newD);
    }
    if(id==='STRIKE_PR' || id==='CONTRACTS'){
        const newD = Data.filter((item) => item[id]=== +data);
        setFilterData(newD);
    }
    if(id==='LOW'){
        const newD = Data.filter((item) => item[id]<= +data);
        setFilterData(newD);
    }
    if(id==='HIGH'){
        const newD = Data.filter((item) => item[id]>= +data);
        setFilterData(newD);
    }
    if(data.trim().length === 0){
        setFilterData(Data);
    }
}
  return (
    <div className="container">
      <h4>*NOTE - ONLY ONE FILTER AT A TIME</h4>
      <Page currPage={currPage} setCurrPage={setCurrPage} nPages={nPages}  />
      <div className="custom container">
      <table className="table table-striped ">
      <thead>
          <tr>  
          <th>FILTER</th>
          <th><input onChange={(event)=>updateData(event.target.value,keys[0])} id={keys[0]} placeholderplaceholder="--"/></th>
          <th><input onChange={(event)=>updateData(event.target.value,keys[1])} id={keys[1]} placeholder="--"/></th>
          <th>NOT FILTER</th>
          <th><input type="number" onChange={(event)=>updateData(event.target.value,keys[3])} id={keys[3]} placeholder="--"/></th>
          <th><input onChange={(event)=>updateData(event.target.value,keys[4])} id={keys[4]} placeholder="--"/></th>
          <th>NOT FILTER</th>
          <th><input type="number" onChange={(event)=>updateData(event.target.value,keys[6])} id={keys[6]} placeholder="--"/></th>
          <th><input type="number" onChange={(event)=>updateData(event.target.value,keys[7])}  id={keys[7]} placeholder="--"/></th>
          <th>NOT FILTER</th>
          <th>NOT FILTER</th>
          <th><input type="number" onChange={(event)=>updateData(event.target.value,keys[10])} id={keys[10]} placeholder="--"/></th>
          <th>NOT FILTER</th>
          </tr>
        </thead>
        <thead>
          <tr>  
          <th></th>
          <th>{keys[0]}</th>
          <th>{keys[1]}</th>
          <th>{keys[2]}</th>
          <th>{keys[3]}</th>
          <th>{keys[4]}</th>
          <th>{keys[5]}</th>
          <th>{keys[6]}</th>
          <th>{keys[7]}</th>
          <th>{keys[8]}</th>
          <th>{keys[9]}</th>
          <th>{keys[10]}</th>
          <th>{keys[11]}</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item, index) => (
            <tr  key={index}>
              <td>{index + 1}</td>
              <td>{item[keys[0]]}</td>
              <td>{item[keys[1]]}</td>
              <td>{item[keys[2]]}</td>
              <td>{item[keys[3]]}</td>
              <td>{item[keys[4]]}</td>
              <td>{item[keys[5]]}</td>
              <td>{item[keys[6]]}</td>
              <td>{item[keys[7]]}</td>
              <td>{item[keys[8]]}</td>
              <td>{item[keys[9]]}</td>
              <td>{item[keys[10]]}</td>
              <td>{item[keys[11]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Table;
