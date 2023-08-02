import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const pathname = useLocation().pathname;
  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollTop;
