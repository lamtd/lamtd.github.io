$(document).ready(function() {
    _load_city_to_select();
});
function _load_city_to_select(){
    $.getJSON( "http://localhost:8000/api/city", function( data ) {
      $("select#city_id").append('<option value="">--- Thành phố ---</option>');
      $.each( data, function( key, val ) {
        $("select#city_id").append($('<option value="' + val['city_id'] + '">' + val['city_name'] + '</option>'));
      });
    });
  }
function _load_district_to_select(){
    var _url = 'http://localhost:8000/api/city/' + $("select#city_id").val();
    $("select#district_id").empty();
    $("select#district_id").append('<option value="">--- Quận / Huyện ---</option>');
    $.getJSON( _url, function( data ) {
      $.each( data, function( key, val ) {
        $("select#district_id").append($('<option value="' + val['district_id'] + '">' + val['district_name'] + '</option>'));
      });
    });
  }
function _load_ward_to_select(){
    var _url = 'http://localhost:8000/api/district/' + $("select#district_id").val();
    $("select#ward_id").empty();
    $("select#ward_id").append('<option value="">--- Phường / Xã ---</option>');
    $.getJSON( _url, function( data ) {
      $.each( data, function( key, val ) {
        $("select#ward_id").append($('<option value="' + val['ward_id'] + '">' + val['ward_name'] + '</option>'));
      });
    });
  }