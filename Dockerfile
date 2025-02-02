# Utilisation de l'image Nginx
FROM nginx:latest

# Suppression de la config par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers HTML, CSS et JS dans le dossier de Nginx
COPY . /usr/share/nginx/html

# Exposition du port 80
EXPOSE 80

