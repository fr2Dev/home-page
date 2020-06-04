export const getCurrentTime = (): [string, number] => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const currentHour = getTwoDigit(getHoursFormat(hour));
  const currentMinute = getTwoDigit(currentDate.getMinutes());
  const currentTime = `${currentHour}:${currentMinute}`;

  return [currentTime, hour];
};

const getTwoDigit = (number: number) => {
  if (number < 10) return `0${number}`;
  return number.toString();
};

const getHoursFormat = (hour: number) => {
  if (hour > 12) return hour - 12;
  return hour;
};

export const getGreeting = (hour: number) => {
  const isMorning = hour >= 5 && hour < 12;
  const isAfternoon = hour >= 12 && hour < 18;
  const isEvening = hour >= 18;

  if (isMorning) {
    return 'Good morning';
  } else if (isAfternoon) {
    return 'Good afternoon';
  } else if (isEvening) {
    return 'Good evening';
  } else {
    return 'Good Night';
  }
};
