FROM alpine:3.20.3

COPY entrypoint.sh /
RUN pwd; ls -la; find . -name "entrypoint.sh"

RUN chmod +x entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]