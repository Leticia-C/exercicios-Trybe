multi = 2 * 3  # saída: 6
sum = 2 + 3  # saída: 5
div = 3 / 2  # saída: 1.57

print(sum + multi)

counter = 0
#  counter++  # esse código vai falhar


# original
counter = counter + 1

# simplificado
counter += 1

print(counter)

3 // 2  # saída: 1 
# Note que o operador // realiza a divisão e arredonda o resultado para baixo. Ou seja, realiza o quociente.

3 / 2  # saída: 1.5

a = [1, 2, 3]

b = [1, 2, 3]

print(a == b)
print(a != b)

temperatura = 26

print(18 < temperatura < 28) # ou temperatura < 25 and temperatura > 18

a = 10
b = 5

print(a + b, a * b, a - b, a / b, a // b)

hours = 6

minutes = 6 * 60;
seconds = minutes * 60;

print('minutes', minutes)
print('seconds', seconds);

book_price = 24.20
how_many_books= 60
descont  = (book_price * 0.4) / 100
print(book_price * how_many_books)
price_with_descont = (book_price * how_many_books) - (descont * how_many_books)
total_price = price_with_descont + 3.00 + ((how_many_books - 1) * 0.75)
print('price_with_descont', total_price)

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75
cost = books * book_price + logistic
print('cost', cost)




