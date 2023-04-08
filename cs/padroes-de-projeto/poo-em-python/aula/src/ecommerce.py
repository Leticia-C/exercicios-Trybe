import re
from dataclasses import dataclass
from enum import Enum

class Customer:
    def __init__(self, name: str, email: str, address: str) -> None:
        self.name = name
        self.__email = email
        self.address = address
        
    @property
    def email(self):
       return self.__email   
   
    @email.setter
    def email(self, value):
        if not re.match(r"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", value):
            raise ValueError("Email invalido")
        self.__email = value
    
    
    def __str__(self) -> str:
        return f"{self.name}: {self.address}; {self.email}"
    
    def show_details(self):
        print(f"""
              Nome: {self.name}
              Email: {self.email}
              Address: {self.address}
              """)
        
        
        
new_customer = Customer("Paulo", "gmam", "Rua São Paulo, Centro")

print(new_customer.show_details())

print(new_customer)


@dataclass
class Product:
    name: str
    price: float = 11.00
    stock_quantity: int = 0
    
    
    
class ShoppingCart:
    def __init__(self) -> None:
        self._items: list[tuple[Product, int]] = []
        
    def add_items(self, product_quantity: tuple[Product, int]):
        self._items.append(product_quantity)
        
    def items_quantity(self) -> int:
         return sum( item[1] for item in self._items)
     
    def total_price(self) -> float:
        return sum(
            product.price * quantity  for product, quantity in self._items
            )

    
class Order:
    def __init__(self, customer: Customer, cart: ShoppingCart) -> None:
        self.customer = customer
        self.cart = cart
        self.total_price = cart.total_price()
        self.status = OrderStatus.PENDING
        
        
class OrderStatus(Enum):
    PENDING = 0
    PAID = 1
    FALEID = 2
    CANCELLED = 3
    SHIPPED = 4
    DEVIVERED = 5