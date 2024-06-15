const routerBackFunction = (router) => {
    const storage = globalThis?.sessionStorage;
    const prevPath = storage.getItem("prevPath");
    // Check if prevPath exists and is not '/401' or 'null'
    if (prevPath && prevPath !== '/401' && prevPath !== 'null') {
        router.back(); // Navigate to previous page
    } else {
        router.push('/'); // Navigate to default page
    }
};

export const routerBack = (router) => {
    routerBackFunction(router);
};
