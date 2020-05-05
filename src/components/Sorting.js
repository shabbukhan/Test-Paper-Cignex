import React from "react";

const Sorting = props => {  
    return (
      <div className="sorting">
        <label>Order by </label>
        <select
          className="form-control"
          onChange={props.handleSortChange}
        >
          <option value="lowestprice">Price: Lowest First</option>
          <option value="highestprice">Price: Highest First</option>
          <option value="default">Recently Added (Default)</option>
        </select>
      </div>
    );
  }

export default Sorting;
