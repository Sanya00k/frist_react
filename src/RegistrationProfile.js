import React, { useState } from 'react';

function RegistrationProfile() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    age: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  const handleLogout = () => {
    setIsRegistered(false);
    setUserData({ email: '', name: '', age: '', phone: '' });
  };

  return (
    <div>
      {!isRegistered ? (
        <form className="registration-form" onSubmit={handleRegister}>
          <h2>Регистрация</h2>
          <input
            type="email"
            name="email"
            placeholder="Эмаил"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Возраст"
            value={userData.age}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={userData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      ) : (
        <div className="profile-display">
          <h2>Профиль</h2>
          <p>Эмаил: {userData.email}</p>
          <p>Имя: {userData.name}</p>
          <p>Возраст: {userData.age}</p>
          <p>Телефон: {userData.phone}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default RegistrationProfile;
