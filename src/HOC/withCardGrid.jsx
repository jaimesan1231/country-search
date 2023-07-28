import { useEffect, useState } from "react";

const withCardGrid = (WrappedComponent) => {
  const CardGridHOC = (props) => {
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);
    useEffect(() => {
      const updateLimitBasedOnScreenSize = () => {
        const isMobile = window.innerWidth <= 479;
        const isTablet = window.innerWidth > 479 && window.innerWidth <= 1023;
        if (isMobile) {
          setLimit(3);
        } else if (isTablet) {
          setLimit(6);
        } else {
          setLimit(9);
        }
      };
      window.addEventListener("resize", updateLimitBasedOnScreenSize);
      updateLimitBasedOnScreenSize();

      return () => {
        window.removeEventListener("resize", updateLimitBasedOnScreenSize);
      };
    }, []);
    const handleNextPage = () => {
      setPage((prev) => prev + 1);
    };
    const handlePrevPage = () => {
      setPage((prev) => prev - 1);
    };
    return (
      <WrappedComponent
        limit={limit}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        {...props}
      />
    );
  };
  return CardGridHOC;
};

export default withCardGrid;
