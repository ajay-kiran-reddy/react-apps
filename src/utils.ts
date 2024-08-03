import moment from "moment";

const currentDay = new Date().toLocaleString("en", {
  weekday: "long",
});

const formatDate = (date: string) => {
  const dateFormat = moment(date).format("D/MM/YYYY");
  return dateFormat;
};

const timeAgo = (date: string) => {
  return moment.utc(date, "YYYY-MM-DD HH").local().fromNow();
};

const formatDateTime = (date: string) => {
  return moment(date).format("llll");
};

const formatDayMonthYear = (date: any) => {
  return moment(date).format("dddd Do MMMM, YYYY");
};

const getDayName = (date: string) => {
  return moment(date).format("dddd");
};

const isDateExpired = (date: any) => {
  const now = moment(new Date()).format(moment.HTML5_FMT.DATE);
  return now > moment(date).format(moment.HTML5_FMT.DATE);
};

const isDateSame = (date: any) => {
  const x = moment(new Date(date)).format("LL");
  const today = moment(new Date()).format("LL");
  return x === today;
};

const convertUtcToIst = (date: any) => {
  const gmtDateTime = moment.utc(date, "YYYY-MM-DD HH");
  return gmtDateTime.local().format("llll");
};

const isMobileView = () => {
  const width = window.innerWidth;
  return width < 768;
};

export {
  currentDay,
  formatDate,
  timeAgo,
  formatDateTime,
  getDayName,
  formatDayMonthYear,
  isDateExpired,
  isDateSame,
  convertUtcToIst,
};

export { isMobileView };
