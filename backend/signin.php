<?php
include('connection.php');

$username = $_POST['username'];
$password = $_POST['password'];

$query = $mysqli->prepare('select id,username,password,email
from users 
where username=?');
$query->bind_param('s', $username);
$query->execute();

$query->store_result();
$query->bind_result($id, $username, $hashed_password, $email);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['user_id'] = $id;
        $response['username'] = $username;
        $response['email'] = $email;
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);



// mhmd377juse@gmail.com 
// mhmdhussein37777
// mhf34