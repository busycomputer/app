FROM jetpackio/devbox:latest

# Installing your devbox project
WORKDIR /code
USER root:root
RUN mkdir -p /code && chown ${DEVBOX_USER}:${DEVBOX_USER} /code
USER ${DEVBOX_USER}:${DEVBOX_USER}
COPY --chown=${DEVBOX_USER}:${DEVBOX_USER} . .

# Install packages and dependencies
RUN devbox install
RUN devbox run prepare

CMD ["devbox", "generate", "direnv", "-f"]