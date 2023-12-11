# Running portal-proveedores in production

## Requirements

- Ubuntu OS
- Docker installed
- Docker-compose
- Git access to the following repositories
  https://Loma-Negra365@dev.azure.com/Loma-Negra365/Portal%20de%20Proveedores%20-%20Compras/\_git/Portal%20de%20Proveedores%20-%20Compras

## Steps to follow

1. Clone the repositories in the server

```bash
git clone
```

2. Replace certificates inside `nginx/certs` folder.
3. Configure the required env variables for running the project

```bash
export JWT_SECRET="fake-secret"
export SMTP_HOST="example.com"
export SMTP_PORT="1233"
export SMTP_USERNAME="user"
export SMTP_PASSWORD="pass"
```

or copy them to the `/etc/environment` file with the following format

```
JWT_SECRET="fake-secret"
SMTP_HOST="example.com"
SMTP_PORT="1233"
SMTP_USERNAME="user"
SMTP_PASSWORD="pass"
EMAIL_FROM="help@example.com"
```

````
4. Configure portal-proveedores as daemon service

```bash
sudo cp ./nginx/web.service /etc/systemd/system/web.service

systemctl enable web.service
systemctl start web.service

````

OPTION: Running the server as a process

```bash
docker-compose --build up -d
```
