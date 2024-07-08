import { useMediaQuery } from "react-responsive";

// Media Query utility that uses react-resonsive to handle changes on screen size 
const useWindowMediaQuery = () => {
    // Media Query to check if screen is mobile. Calculated from a single point here and imported/used in other files for simplicity  
    const isMobile = useMediaQuery({ query: `(max-width: 500px)` });
    return { isMobile };
};

export default useWindowMediaQuery;