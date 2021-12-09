def my_awesome_decorator(fun):
  def wrapped(*args):
      #alt satırda funa gelen tüm değerleri 1 arttırıp döndüğü bool değeri tersine çevirip return ediyoruz
    return not fun(*[i+1 for i in args])
  return wrapped

@my_awesome_decorator
def mod_batch(*numbers):
  """
  satır 11 de numbers içindeki değer kadar dönüyoruz ve numbersin içindeki değeri i ye atıyoruz
  satır 13 de sayı 3 e bölünmüyor ise false dönüyoruz döngü bittiğinde false dönmediysek hazırda bulunan return True çalışıyor
  """
  for i in numbers:
    if(i % 3 != 0):
      return False
  return True

print(mod_batch(1, 2, 3))
print(mod_batch(2, 8, 20))