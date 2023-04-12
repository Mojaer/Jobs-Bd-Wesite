// use local storage to manage cart data
const addToDb = id => {
    let appliedJobs = getAppliedJob();
    // add quantity
    const appliedOrNot = appliedJobs[id];
    if (!appliedOrNot) {
        appliedJobs[id] = 1;
    }
    else {
        // const newQuantity = appliedOrNot+ 1;
        // appliedJobs[id] = newQuantity;
        alert('you have already applied ')
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const removeFromDb = id => {
    const appliedJobs = getAppliedJob();
    if (id in appliedJobs) {
        delete appliedJobs[id];
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
    }
}

const getAppliedJob = () => {
    let appliedJobs = {};

    //get the shopping cart from local storage
    const PreviouslyApplied = localStorage.getItem('applied-jobs');
    if (PreviouslyApplied) {
        appliedJobs = JSON.parse(PreviouslyApplied);
    }
    return appliedJobs;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('applied-jobs');
}

export {
    addToDb,
    removeFromDb,
    getAppliedJob,
    deleteShoppingCart
}
