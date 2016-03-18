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
      "data": {
        "filename": $_FILES["file"]["name"],
        "filesize": ($_FILES["file"]["size"] / 1024),
        "filetype": $_FILES["file"]["type"]
      }
    }
  '
  }
?>
