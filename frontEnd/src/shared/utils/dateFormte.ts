export const formatIsoDate = (isoString: string) => {
  const date: any = new Date(isoString);

  if (isNaN(date)) {
    return "Invalid Date";
  }

  // Define simple formatting options: Weekday, Month, Day, Year (UTC time zone)
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  };

  // Use toLocaleDateString for robust, simple formatting
  return date.toLocaleDateString("en-US", options);
};
