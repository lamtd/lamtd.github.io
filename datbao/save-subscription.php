<?php
try {
	$fp = fopen('customer-registered.csv', 'a');
	fputcsv($fp, $_POST);
	fclose($fp);
	// $url = 'https://forbes.local';
	// $myvars = $_POST;
	// // $myvars = 'myvar1=' . $myvar1 . '&myvar2=' . $myvar2;

	// $ch = curl_init( $url );
	// curl_setopt( $ch, CURLOPT_POST, 1);
	// curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
	// curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
	// curl_setopt( $ch, CURLOPT_HEADER, 0);
	// curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

	// $response = curl_exec( $ch )
	// header('Location: /success.html');
} catch (Exception $e) {

}

?>
