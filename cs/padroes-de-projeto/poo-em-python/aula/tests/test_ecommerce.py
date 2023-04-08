from  src.ecommerce import Customer, Product, ShoppingCart
import pytest

EMAIL = "eli@trybe.com"
NAME = "Eli"
ADDRESS = "Rua 10"
PRODUCT_X = "Produto X"
PRODUCT_Y = "Produto Y"

def test_customer_create():
    new_customer = Customer(NAME, EMAIL, ADDRESS)
    assert new_customer.name == NAME
    assert new_customer.email == EMAIL
    assert new_customer.address == ADDRESS
    
    
def test_customer_update_email_invalid():
      new_customer = Customer(NAME, EMAIL, ADDRESS)
      with pytest.raises(ValueError, match="Email invalido"):
         new_customer.email = "email_invalido.br"
        
def test_product_create():
    new_product = Product(PRODUCT_X, 100.00, 2)
    assert new_product.name == PRODUCT_X
    assert new_product.price == 100.00
    assert new_product.stock_quantity == 2
    
def test_shopping_cart_add_item():
    car = ShoppingCart()
    product_1 = Product(PRODUCT_X, 100.00, 2)
    product_2 = Product(PRODUCT_Y, 10.00, 20)
    car.add_items((product_1, 3))
    car.add_items((product_2, 1))
    assert len(car._items) == 2
    assert car._items[0] == (product_1, 3)
    assert car._items[1] == (product_2, 1)


def test_shopping_cart_items_quantity():
    car = ShoppingCart()
    assert car.items_quantity() == 0
    product_1 = Product(PRODUCT_X, 100.00, 2)
    car.add_items((product_1, 3))
    assert car.items_quantity() == 3
    

def test_shopping_cart_total_price():
    car = ShoppingCart()
    product_1 = Product(PRODUCT_X, 10.00)
    product_2 = Product(PRODUCT_Y, 20.50 )
    car.add_items((product_1, 3))
    car.add_items((product_2, 1))
    assert car.total_price() == 50.50