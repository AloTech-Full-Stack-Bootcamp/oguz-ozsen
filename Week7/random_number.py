from random import randint

count = int(input("Kaç adet random sayı üretmek istiyorsunuz: "))
digit = int(input("Basamak sayısını giriniz: "))


def random_number_generator(count, digit=6):
  #istenilen basamak ile üretilebilecek maksimum sayıyı hesaplıyoruz
  valRange = (((10**digit)-1)-(10**(digit-1)))
  #eğer maksimum üretilen sayı istenilen sayıdan büyük veya eşit ise içeri giriyoruz 
  if(valRange >= count):
    radVal = "1"
    numbers = set()
    if (digit==1):
      radVal = 10
    else:#istenilen basamak kadar 0 ekliyoruz
      for _ in range(digit):
        radVal = radVal + "0"
    #stringi int e çeviriyoruz işlem yaparken hata almamak için
    radVal = int(radVal)
    #setin içindeki değer istenisel sayı miktarından küçükse döngü sürekli çalışacak
    while(len(numbers)<count):
      value = randint(radVal/10-1 if radVal==10 else radVal/10 , radVal-1)
      numbers.add(value)
    print(numbers)
  #değil ise hata atıyoruz ve maksimum üretilebilcek sayıyı bastırıyoruz
  else:
    print(f"Hata, istenilen basamak sayısı {digit} bu basamak sayısı size maksimum {valRange} sayı üretebilir.")
  

random_number_generator(count, digit)
