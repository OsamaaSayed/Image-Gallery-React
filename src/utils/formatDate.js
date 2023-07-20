export const formatDate = (createdAtDate) => {
    const date = new Date(createdAtDate);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const dateString = date.toLocaleDateString("en-US", options);
    return dateString;
};

