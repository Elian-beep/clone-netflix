FROM nginx

LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Elian Batista & Linda Hillary"

COPY . /usr/share/nginx/html

VOLUME /Arquivos/

ENTRYPOINT ["/usr/sbin/nginx"]