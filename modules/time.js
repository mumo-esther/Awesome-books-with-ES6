const time = () => {
  const timeDate = document.getElementById('date');
  const date = new Date();
  timeDate.innerHTML = date;
};

export default time;