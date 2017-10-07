let helpers =  {
  formatPrice :  function(cents) {
    return  ( cents.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' kn');
  },
  calculatePriceTotal : function() {

  },
  todayDay : function() {
    var todayDate = new Date();
    var todayDay = todayDate.getDay();

    return todayDay;
  },
  calculateDay : function(nameOfWeek) {
    let today, todayNumber, dayofWeek, needDayOfWeek, needDay, formatedDate;
    today = new Date();
    todayNumber = today.getDay();

    needDayOfWeek = (nameOfWeek + 1) - todayNumber;
    needDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + needDayOfWeek);

    formatedDate = new Date(needDay);
    formatedDate = `${formatedDate.getDate()}.${(formatedDate.getMonth() +1)}.${formatedDate.getFullYear()}`;
    
    return formatedDate;
  }

}

export default helpers;
