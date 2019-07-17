import React, { Fragment, useState, useEffect } from "react";
import styled, { css } from "styled-components";

const TableWrapperUI = styled.table`
  width: 100%;
  border-spacing: 0;
`;
const TableTdUI = styled.td`
  padding: 10px 3px;
`;
const TableThUI = styled.th`
  text-align: left;
  padding: 10px 3px;
  font: 600 12px/15px "Source Sans Pro";
  color: #737a9b;
`;

const TableTrUI = styled.tr`
  cursor: pointer;
  :hover {
    background: #edf4f9;
  }
`;
const TableTHeadUI = styled.thead`
  padding: 0 10px;
  ${TableTrUI} {
    :hover {
      background: none;
      cursor: auto;
 
  }
`;

const TableTBodyUI = styled.tbody``;

const Table = ({ children, titles, data }) => {
  const [amountColumns, setAmountColumns] = useState(0);
  useEffect(() => {
    setAmountColumns(titles.length);
  }, []);

  const displayData = data => {
    return data.map((x, idx) => {
      return (
        <TableTrUI key={idx}>
          {Object.keys(x).map((value, ids) => (
            <TableTdUI key={ids}>{x[value]}</TableTdUI>
          ))}
        </TableTrUI>
      );
    });
  };

  const displayTitles = titles => {
    return titles.map((title, idx) => {
      return <TableThUI key={idx}>{title}</TableThUI>;
    });
  };

  return (
    amountColumns > 0 && (
      <TableWrapperUI columns={amountColumns}>
        <TableTHeadUI>
          <TableTrUI>{displayTitles(titles)}</TableTrUI>
        </TableTHeadUI>
        <TableTBodyUI>{displayData(data)}</TableTBodyUI>
      </TableWrapperUI>
    )
  );
};
export default Table;
