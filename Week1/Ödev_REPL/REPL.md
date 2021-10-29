REPL ortamında hazırlanan dairenin alanını hesaplayan kod.

REPL ortamına girebilmeniz için terminale node yazıp enter tuşuna basmanız yeterlidir.
Aşağıda gördüğünüz kod bloğunu .editor yazarak oluşturdum.

```
.editor
function calcCircleArea(radius){
    let area = Math.PI * (radius*radius);
    console.log(area.toFixed(3));
}
calcCircleArea(3); //Fonksiyon 1

calcCircleArea(6); //Fonksiyon 2

calcCircleArea(7); //Fonksiyon 3

//Output 1
28.274

//Output 2
113.097

//Output 3
153.938
```