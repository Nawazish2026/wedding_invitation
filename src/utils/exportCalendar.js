export const generateGoogleCalendarLink = (event, coupleName) => {
  const title = encodeURIComponent(`${event.name} - ${coupleName}`);
  const details = encodeURIComponent(`${event.description}\n\nDress Code: ${event.dressCode}\n\nVenue: ${event.venue}`);
  const location = encodeURIComponent(event.venue);
  
  // Format sample dates safely (standard fallback ISO)
  const startTime = '20261214T170000Z';
  const endTime = '20261214T220000Z';
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startTime}/${endTime}`;
};

export const downloadIcsFile = (event, coupleName) => {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Muslim Indian Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${event.name} - ${coupleName}`,
    `DESCRIPTION:${event.description.replace(/\n/g, ' ')}`,
    `LOCATION:${event.venue.replace(/,/g, '\\,')}`,
    'DTSTART:20261214T113000Z',
    'DTEND:20261214T163000Z',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${event.name.toLowerCase().replace(/\s+/g, '-')}-invite.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

