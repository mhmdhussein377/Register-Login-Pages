<?php
include('connection.php');

$email = $_POST['email'];
$username = $_POST['username'];
// $username=chris
// $password=chris1234
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];


$check_username = $mysqli->prepare('select username from users where username=?');
$check_username->bind_param('s', $username);
$check_username->execute();
$check_username->store_result();
$username_exists = $check_username->num_rows();

$check_email = $mysqli->prepare('select email from users where email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($username_exists == 0 && $email_exists == 0 && $password == $confirm_password) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(username,email,password) values(?,?,?)');
    $query->bind_param('sss', $username, $email, $hashed_password);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}

// types of http request : POST,GET,PUT,DELETE 
echo json_encode($response);
