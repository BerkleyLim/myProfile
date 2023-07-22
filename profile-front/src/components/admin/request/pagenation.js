import React, { useState } from "react";

const Pagenation = ({ totalPosts, limit, page, setPage }) => {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  return (
    <div>
      <nav aria-label="Page navigation example">
        <div className="pagination justify-content-center">
          <div className={`page-item ${page === 1 && "disabled"}`}>
            <button
              className={`page-link`}
              onClick={() => {
                setPage(page - 1);
                setCurrPage(page-2);
              }}
              disabled={page === 1}
              tabIndex="-1"
            >
              Previous
            </button>
          </div>
          {Array(5).fill().map(
            (_, i) => (
              <>
              {
                i < numPages && 
                <div className="page-item" key={i + 1}>
                  {" "}
                  {i <4 ? (
                    <button
                      className="page-link"
                      // onClick={() => setPage(i + 1)}
                      onClick={() => setPage(firstNum + i)}
                      aria-current={page === firstNum + 1 + i ? "page" : null}
                    >
                      {firstNum + i}
                    </button>
                  ) : (
                    /*
                          i > 4 일때
                        */
                    <button
                      className="page-link"
                      onClick={() => setPage(lastNum)}
                      aria-current={page === lastNum ? "page" : null}
                    >
                      {lastNum}
                    </button>
                  )}
                </div>
              }
              </>
            )
          )}
          <div className={`page-item ${page === numPages && "disabled"}`}>
            <button
              className={`page-link`}
              onClick={() => {
                setPage(page + 1);
                setCurrPage(page + 1);
              }}
              disabled={page === numPages}
            >
              Next
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Pagenation;
