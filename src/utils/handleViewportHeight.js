export const setFullHeight = (element) => {
    if (!element) return;

    const updateHeight = () => {
        element.style.height = `${window.innerHeight}px`;
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
};