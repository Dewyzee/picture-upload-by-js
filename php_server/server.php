<?php
echo $_FILES["file"]
if ($_FILES["file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  $output = array('size'=>($_FILES["file"]["size"] / 1024), 'type'=>$_FILES["file"]["type"], 'name'=>$_FILES["file"]["name"]);
  $json_output = json_encode($output);
  echo '
    {
      "errCode": 0,
      "data": $json_output
    }
  '
  }
?>
