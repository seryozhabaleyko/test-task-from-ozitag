<div align="center">
  <img width="40%" src="https://hhcdn.ru/employer-logo/3266865.png" />
</div>

<br/>

<h1 align="center">Тестовое задание</h1>

<h2>Технологии:</h2>

<ul>
  <li>Typescript</li>
  <li>React.js</li>
</ul>

<h2>Описание:</h2>

<p>Реализовать приложение из двух экранов:</p>

<ol>
  <li>Экран авторизации, содержит форму с полями <strong>email</strong> и <strong>password</strong> и кнопку Submit.</li>
  <li>Экран авторизованного юзера, содержит отображение профиля юзера и кнопку Выйти.</li>
</ol>

<p>Если пользователь авторизован – показывать экран 2, иначе – экран 1.</p>

<h3>1. API для аутентификации:</h3>

> <code>POST /auth/user HTTP/1.1<br>
> Host: https://tager.dev.ozitag.com/api<br>
> Accept: application/json<br>
> Content-Type: application/json</code>

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

<h3>2. API для выхода:</h3>

<code>POST /user/profile/logout HTTP/1.1<br>
Host: https://tager.dev.ozitag.com/api<br>
Accept: application/json<br>
Authorization: Bearer {access_token}</code>

<p>Пример ответа:</p>

```json
{
    "success": true
}
```

<h3>3. API для получения профиля авторизованного юзера:</h3>

<code>GET /user/profile HTTP/1.1<br>
Host: https://tager.dev.ozitag.com/api<br>
Accept: application/<br>
Authorization: Bearer {access_token}</code>

<p>Пример ответа:</p>

```json
{
    "data": {
        "name": "Test User",
        "email": "user@ozitag.com"
    }
}
```

<h3>Будет плюсом:</h3>

<ul>
    <li>использование Formik, Fetch API</li>
    <li>валидация формы</li>
</ul>
