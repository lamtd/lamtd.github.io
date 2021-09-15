var lstDistrict, lstWard;

$(document).ready(function () {

  $("select.select-district").empty();
  $("select.select-ward").empty();

  $.getJSON("/assets/js/district.json", function (data) {
    lstDistrict = data;
    lstDistrict.sort(function (a,b) {
      var aName = a.district_name.toLowerCase();
      var bName = b.district_name.toLowerCase(); 
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
      });
  });
  $.getJSON("/assets/js/ward.json", function (data) {
    lstWard = data;
    lstWard.sort(function (a,b) {
      var aName = a.ward_name.toLowerCase();
      var bName = b.ward_name.toLowerCase(); 
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
      });
  });
  //default load thông tin thành phố trước
  _load_city_to_select();

  $("select.select-city").change(function () {
    _load_district_to_select();
  });
  $("select.select-district").change(function () {
    _load_ward_to_select();
  });
});

function _load_city_to_select() {
  $("select.select-city").empty();
  $("select.select-city").append('<option value="">--- Thành phố ---</option>');

  $.getJSON("/assets/js/city.json", function (data) {
    
    data.sort(function (a,b) {
          var aName = a.city_name.toLowerCase();
          var bName = b.city_name.toLowerCase(); 
          return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    });

    $.each(data, function (key, val) {
      //Khai báo value, text, nếu database dùng type int, thì chuyển value thanh cityID
      var cityID = val['city_id'];
      var cityName = val['city_name'];

      $("select.select-city").append($(`<option city_id="${cityID}" value="${cityName}">${cityName}</option>`));
    });
  });
}

function _load_district_to_select() {

  $("select.select-district").empty();
  $("select.select-district").append('<option value="">--- Quận / Huyện ---</option>');

  var districtInCity = $.grep(lstDistrict, function (n, i) {
    return n.city_id == $('option:selected', $("select.select-city")).attr('city_id');
  });

  $.each(districtInCity, function (key, val) {
    //Khai báo value, text, nếu database dùng type int, thì chuyển value thanh districtID
    var districtID = val['district_id'];
    var districtName = val['district_name'];

    $("select.select-district").append($(`<option district_id="${districtID}" value="${districtName}">${districtName}</option>`));
  });
}
function _load_ward_to_select() {

  $("select.select-ward").empty();
  $("select.select-ward").append('<option value="">--- Phường / Xã ---</option>');

  var wardInDistrict = $.grep(lstWard, function (n, i) {
    return n.district_id == $('option:selected', $("select.select-district")).attr('district_id');
  });

  $.each(wardInDistrict, function (key, val) {
    //Khai báo value, text, nếu database dùng type int, thì chuyển value thanh wardID
    var wardID = val['ward_id'];
    var wardName = val['ward_name'];
    $("select.select-ward").append($(`<option value="${wardName}">${wardName}</option>`));
  });

}
