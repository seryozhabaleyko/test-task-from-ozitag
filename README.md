<div align="center">
  <img width="40%" src="https://hhcdn.ru/employer-logo/3266865.png" />
</div>

<br/>

<h1 align="center">Тестовое задание</h1>

<h3>Технологии:</h3>

<ul>
  <li>Typescript</li>
  <li>React.js</li>
  <li>Formik</li>
  <li>React Spectrum</li>
  <li>Redux</li>
  <li>Redux Saga</li>
</ul>

<h3>Описание:</h3>

<p>Реализовать приложение из двух экранов:</p>

<ol>
  <li>Экран авторизации, содержит форму с полями <strong>email</strong> и <strong>password</strong> и кнопку Submit.</li>
  <li>Экран авторизованного юзера, содержит отображение профиля юзера и кнопку Выйти.</li>
</ol>

<p>Если пользователь авторизован – показывать экран 2, иначе – экран 1.</p>

<h4>1. API для аутентификации:</h4>

    POST /auth/user HTTP/1.1
    Host: https://tager.dev.ozitag.com/api
    Accept: application/json</p><p>Content-Type: application/json

```json
{
    "clientId": 1,
    "email": "user@ozitag.com",
    "password": "user"
}
```

<p>Пример ответа:</p>

```json
{
    "data": {
        "tokenType": "Bearer",
        "expiresAt": "2021-08-27T12:25:36Z",
        "accessToken": "eyJ0eXAiOiJKV19BbrwgbKi9eJH9IeXYTjWdXkwshh...rQgA",
        "refreshToken": "def50200471ef4d2a5bc66ab0a833290bb426d495...280fb"
    }
}
```

<h4>2. API для выхода:</h4>

    POST /user/profile/logout HTTP/1.1
    Host: https://tager.dev.ozitag.com/api
    Accept: application/json
    Authorization: Bearer {access_token}

<p>Пример ответа:</p>

```json
{
    "success": true
}
```

<h4>3. API для получения профиля авторизованного юзера:</h4>

    GET /user/profile HTTP/1.1
    Host: https://tager.dev.ozitag.com/api
    Accept: application/
    Authorization: Bearer {access_token}

<p>Пример ответа:</p>

```json
{
    "data": {
        "name": "Test User",
        "email": "user@ozitag.com"
    }
}
```

<h4>Будет плюсом:</h4>

<ul>
    <li>использование Formik, Fetch API</li>
    <li>валидация формы</li>
</ul>
