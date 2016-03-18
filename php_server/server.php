<?php

if ($_FILES["file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  $output = array('size'=>($_FILES["file"]["size"] / 1024), 'type'=>$_FILES["file"]["type"], 'name'=>$_FILES["file"]["name"]);
  echo json_encode($output)
  }
?>
