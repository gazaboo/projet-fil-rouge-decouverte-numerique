for img in $(ls)
do
   convert $img -resize 640x480\!  $img
done