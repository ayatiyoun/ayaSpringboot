# Étape 1 : utiliser une image Java 17
FROM openjdk:17-jdk-slim

# Étape 2 : ajouter un label (facultatif)
LABEL maintainer="ayayo"

# Étape 3 : copier le fichier JAR généré par Maven ou Gradle
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

# Étape 4 : exposer le port sur lequel ton backend tourne
EXPOSE 8080

# Étape 5 : lancer l'application
ENTRYPOINT ["java", "-jar", "/app.jar"]

