Области хранения данных:

- база данных на json-server
- BFF
- redux store

Сущности приложения

- пользователь: БД (список пользователей), BFF (сессия текущего), redux store (для отображения в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), redux store (для использования на клиенте)
- статья: БД (список статей), redux store (для отображения на клиенте)
- комментарии: БД (список комментариев), redux store (для отображения на клиенте)

Таблицы БД:

- пользователи - users: id / login / password / registered_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content / published_at

Схема состояния на BFF:

- сессия текущего пользователя: login / password / role

Схема состояния на redux store:

- user: id / login / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / authorId / content / publishedAt
- users: id / login / registeredAt / role
