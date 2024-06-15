const pushAndScroll = (router, route, scrollY) => {
    router.push(route).then(() => {
        window.scrollTo({
            top: scrollY,
            behavior: 'smooth',
        });
    });
};

export const handleNavigateAndRoll = (router, route, scrollY) => {
    pushAndScroll(router, route, scrollY);
};
