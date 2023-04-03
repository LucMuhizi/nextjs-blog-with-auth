import React from "react";
import { useRouter } from "next/router";

const PaginationComponent = ({ allBlogCount }: any) => {
  const itemsPerPage = 3;
  const paginationCount = Math.ceil(allBlogCount / itemsPerPage);
  console.log(paginationCount, "pagination count");

  console.log(Array.from(Array(paginationCount).keys()), "pagination count");
  const paginationArray = Array.from(Array(paginationCount).keys());

  const { asPath, query } = useRouter();
  console.log(asPath, query, "router data");

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination pagination-md justify-content-end">
          {/* <li className="page-item active" aria-current="page">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li> */}

          {paginationArray.map((curr) => (
            <li
              key={curr}
              className={`page-item ${
                asPath === "/" && curr === 0
                  ? "active"
                  : query.id == String(curr)
                  ? "active"
                  : ""
              }`}
            >
              <a className="page-link" href="#">
                {curr + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default PaginationComponent;
