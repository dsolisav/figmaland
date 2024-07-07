import { useMediaQuery } from "react-responsive";

const useWindowMediaQuery = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
  
    return { isMobile };
};

export default useWindowMediaQuery;