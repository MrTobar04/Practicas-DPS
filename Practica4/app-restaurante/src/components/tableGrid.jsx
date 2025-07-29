'use client';

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTableAvailable } from "@/redux/tableSlice";
import '../styles/product-grid.css';

const TableGrid = () => {
  const dispatch = useDispatch();
  const tableState = useSelector(state => state.table); 
  const tables = Object.values(tableState);

  return (
    <>
      <div className="product-grid">
        {tables.map(table => (
          <div key={table.id} className="product-card">
            <h3>Table Number {table.id}</h3>
            <button onClick={() => dispatch(setTableAvailable(table.id))}>
              {tableState[table.id]?.available ? (<p>Asignar Mesa</p>) : (<p>Liberar Mesa</p>)}
            </button>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default TableGrid;
