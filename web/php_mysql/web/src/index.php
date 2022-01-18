<?php

error_reporting(E_ALL); # Only for testing

define("FLAG", getenv("FLAG"));

$mysq_host = getenv('MYSQL_HOST');
$mysql_user = getenv("MYSQL_USER");
$mysql_password = getenv("MYSQL_PASSWORD");
$mysql_database = getenv("MYSQL_DATABASE");

$conn = new mysqli($mysq_host, $mysql_user, $mysql_password, $mysql_database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username, password FROM users;";
$result = $conn->query($sql);

echo "<pre>";
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        var_dump($row);
    }
}
echo "</pre>";
?>