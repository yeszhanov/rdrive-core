// import React, { Fragment, useState, useEffect } from "react";
// import styled, { css } from "styled-components";

// const TableWrapperUI = styled.div`
//   display: grid;
//   box-sizing: border-box;
//   width: 100%;
//   overflow:hidden;
//   border: 1px solid #dbeaf4;
//   grid-template-columns: repeat(
//     ${props => props.columns && props.columns},
//     fit-content(400px)
//   );
//   justify-items: center;
//   padding: 5px 0;
//   justify-content: space-between;
//   > span {
//     padding: 5px;
//     justify-self: left;
//     position: relative;  
//     :hover {
//       background: #dbeaf4;
//     }
//     :hover::before, ::before {
//       cursor:pointer;
//       content: "";
//       position: absolute;
//       background: inherit;
//       top: 0;
//       bottom: 0;
//       left: -100vw;
//       right: -100vw;
//     }
//     :hover::before {
//       z-index:-1
//     }
//   }
// `;

// const LineUI = styled.div`
//   border-bottom: 1px solid #dbeaf4;
//   width: 100%;
//   grid-column: 1 / -1;
// `;

// const Table = ({ children, titles, data }) => {
//   const [amountColumns, setAmountColumns] = useState(0);
//   useEffect(() => {
//     setAmountColumns(titles.length);
//   }, []);

//   const displayData = data => {
//     return data.map((x, idx) => {
//       return (
//         <Fragment key={idx}>
//           {Object.keys(x).map((value, ids) => (
//             <span key={ids}>{x[value]}</span>
//           ))}
//           <LineUI />
//         </Fragment>
//       );
//     });
//   };

//   const displayTitles = titles => {
//     return titles.map((title, idx) => {
//       return <span key={idx}>{title}</span>;
//     });
//   };

//   return (
//     amountColumns > 0 && (
//       <TableWrapperUI columns={amountColumns}>
//         {displayTitles(titles)}
//         <LineUI /> {displayData(data)}
//       </TableWrapperUI>
//     )
//   );
// };
// export default Table;



import React, { Fragment, useState, useEffect } from "react";
import styled, { css } from "styled-components";

const TableWrapperUI = styled.table`
width:100%;
`;
const TableTdUI = styled.td`
  padding:0;
`;
const TableThUI = styled.th`
text-align: left;
`;
const TableTrUI = styled.tr`
  cursor: pointer;

  :hover {
    background: lightblue;
  }
`;

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

<thead><TableTrUI>{displayTitles(titles)}</TableTrUI></thead>
        <tbody>{displayData(data)}</tbody>
      </TableWrapperUI>
    )
  );
};
export default Table;
