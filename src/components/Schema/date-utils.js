/**
 * Convert blog post date from "July 2, 2026" format to ISO 8601 "2026-07-02"
 * Also handles other common date formats in the blog data
 *
 * @param {string} dateStr - Date string from blog post (e.g., "July 2, 2026")
 * @returns {string} ISO 8601 date string (YYYY-MM-DD) or empty string if invalid
 */
export function toISODate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return "";

  // Handle common date formats from the blog data (English + Spanish)
  const monthNamesEn = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthNamesEs = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Try "Month D, YYYY" format (English + Spanish)
  const monthDayYearMatch = dateStr.match(/^(\w+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (monthDayYearMatch) {
    const [, monthName, day, year] = monthDayYearMatch;
    let monthIndex = monthNamesEn.indexOf(monthName);
    if (monthIndex === -1) monthIndex = monthNamesEs.indexOf(monthName);
    if (monthIndex !== -1) {
      const month = String(monthIndex + 1).padStart(2, "0");
      const paddedDay = String(day).padStart(2, "0");
      return `${year}-${month}-${paddedDay}`;
    }
  }

  // Try "YYYY-MM-DD" format (already ISO)
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  // Try "MM/DD/YYYY" format
  const slashMatch = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const [, month, day, year] = slashMatch;
    const paddedMonth = String(month).padStart(2, "0");
    const paddedDay = String(day).padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }

  // Try "DD/MM/YYYY" format
  const slashMatch2 = dateStr.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch2) {
    const [, day, month, year] = slashMatch2;
    const paddedMonth = String(month).padStart(2, "0");
    const paddedDay = String(day).padStart(2, "0");
    return `${year}-${paddedMonth}-${paddedDay}`;
  }

  // If none match, return empty string (will use datePublished for both)
  return "";
}

export default { toISODate };