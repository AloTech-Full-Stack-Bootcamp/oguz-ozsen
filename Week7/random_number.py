from random import randint

count = int(input("Kaç adet random sayı üretmek istiyorsunuz: "))
digit = int(input("Basamak sayısını giriniz: "))


def random_number_generator(count, digit=6):
  radVal = "1"
  numbers = set()
  if (digit==1):
    radVal = 10
  else:
    for _ in range(digit):
      radVal = radVal + "0"
  
  radVal = int(radVal)
  while(len(numbers)<count):
    value = randint(radVal/10-1 if radVal==10 else radVal/10 , radVal-1)
    numbers.add(value)
      
  print(numbers)

random_number_generator(count, digit)
