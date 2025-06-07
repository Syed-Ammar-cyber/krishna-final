// Scroll animation for sections
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-fade');

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 90)) {
                displayScrollElement(el);
            }
        });
    };

    // Initialize on load
    handleScrollAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
}); 