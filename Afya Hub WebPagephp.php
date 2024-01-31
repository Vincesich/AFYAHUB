<?php
// Connect to MySQL database
$servername = "localhost";
$username = "Vincesich";
$password = "Afyahub";
$dbname = "your_database";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// Insert form data into MySQL database
$sql = "INSERT INTO users (name, email, phone, password)
        VALUES ('$name', '$email', '$phone', '$password')";

if (mysqli_query($conn, $sql)) {
    // Redirect to success page
    header('Location: success.php');
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);
?>
