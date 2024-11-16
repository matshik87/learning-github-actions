FROM alpine:3.20.3

WORKDIR /app
COPY entrypoint.sh /

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]