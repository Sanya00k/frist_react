import React, { useState } from 'react';
import './App.css';

function App() {


  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
  });
    const [products] = useState([
    { id: '1', name: 'Ноутбук', price: 65000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrKRpO87v8Dogo-BX0ggElN2ojh-Phc03qw&s' },
    { id: '2', name: 'Смартфон', price: 35000, image: 'data:image/jpeg;base64,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' },
    { id: '3', name: 'Планшет', price: 25000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDJhcXMfJ7LZmQSruvdh0mt9L-5Fxdqqong&s' },
    { id: '4', name: 'Наушники', price: 4000 , image: 'data:image/jpeg;base64,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' },
    { id: '5', name: 'Беспроводная мышь', price: 1200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtW-QGqks9T_dF8wr0IelBkcvSne1CaV0pBQ&s' },
    { id: '6', name: 'Клавиатура', price: 89.99, image: 'data:image/jpeg;base64,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' },
 ]);

  const addToCart = (products) => {
    if (isLoggedIn) {
      setCart([...cart, products]);
    } else {
      alert('Войдите, чтобы добавить товар в корзину.');
    }
  };

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUserName('');
      setCart([]);
    } else if (userName.trim()) {
      setIsLoggedIn(true);
    } else {
      alert('Введите имя для входа.');
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeOne = (id) => {
    const idx = cart.findIndex(i => i.id === id);
    if (idx !== -1) {
      setCart(cart.slice(0, idx).concat(cart.slice(idx + 1)));
    }
  };

  const clearCart = () => setCart([]);

  const handleOrder = () => {
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Спасибо за заказ, ${orderData.name}!\nТелефон: ${orderData.phone}\nАдрес: ${orderData.address}\nСумма: ${total.toFixed(2)} ₽`
    );
    setCart([]);
    setShowForm(false);
    setOrderData({ name: '', phone: '', address: '' });
  };

  return (
    <>
      <div className="top-bar">
        <h1 className="shop-title">Магазин</h1>
        <div className="login-section">
          {!isLoggedIn && (
            <input
              type="text"
              placeholder="Введите имя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="login-input"
            />
          )}
          <button
            onClick={toggleLogin}
            className={isLoggedIn ? 'logout-btn' : 'login-btn'}
          >
            {isLoggedIn ? 'Выйти' : 'Войти'}
          </button>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Товары</h2>
      <div className="products" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Цена: {product.price.toLocaleString()} ₽</p>
            <button onClick={() => addToCart(product)}>
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Корзина</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item, idx) => (
              <div key={item.id + '-' + idx} className="card">
                <img src={item.image} alt={item.name} className="product-image" />
                <h3>{item.name}</h3>
                <p>Цена: {item.price.toFixed(2)} ₽</p>
                <button onClick={() => removeOne(item.id)}>
                  Удалить
                </button>
              </div>
            ))}
            <div style={{ margin: '20px 0', fontWeight: 600, fontSize: '1.1rem', color: '#fff' }}>
              В корзине: {cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'}<br />
              К оплате: {total.toFixed(2)} ₽
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button onClick={handleOrder}>Заказать</button>
              <button onClick={clearCart} style={{ background: '#e74c3c', color: '#fff' }}>Удалить все</button>
            </div>
            {showForm && (
              <form
                onSubmit={handleFormSubmit}
                style={{
                  marginTop: 24,
                  background: '#222',
                  padding: 16,
                  borderRadius: 8,
                  color: '#fff',
                  maxWidth: 400,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                <h3 style={{ marginBottom: 12 }}>Анкета для заказа</h3>
                <div style={{ marginBottom: 10 }}>
                  <label>
                    Имя:<br />
                    <input
                      type="text"
                      name="name"
                      value={orderData.name}
                      onChange={handleFormChange}
                      required
                      style={{ width: '100%', padding: 6, marginTop: 2 }}
                    />
                  </label>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>
                    Телефон:<br />
                    <input
                      type="tel"
                      name="phone"
                      value={orderData.phone}
                      onChange={handleFormChange}
                      required
                      style={{ width: '100%', padding: 6, marginTop: 2 }}
                    />
                  </label>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <label>
                    Адрес:<br />
                    <input
                      type="text"
                      name="address"
                      value={orderData.address}
                      onChange={handleFormChange}
                      required
                      style={{ width: '100%', padding: 6, marginTop: 2 }}
                    />
                  </label>
                </div>
                <button type="submit" style={{ marginTop: 8 }}>Отправить заказ</button>
              </form>
            )}
          </>
        ) : (
          <p>Корзина пуста.</p>
        )}
      </div>
    </>
  );
} 

export default App;