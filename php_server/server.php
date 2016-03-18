<?php
if ($_FILES["file"]["error"] > 0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  echo '
    {
      "errCode": 0,
      "data": '2016-03-18'
    }
  '
  }
?>
