export const formatDate = (date) => {
    const dateInstance = new Date(date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateInstance.toLocaleDateString("en-UK", options);
  
    return formattedDate;
  };