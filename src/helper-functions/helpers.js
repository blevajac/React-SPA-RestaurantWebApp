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
  }
}

export default helpers;
