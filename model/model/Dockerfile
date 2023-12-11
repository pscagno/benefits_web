FROM openjdk:17-jdk-alpine as builder

WORKDIR /app/model-benefits

COPY ./pom.xml /app
COPY ./model/.mvn ./.mvn
COPY ./model/mvnw .
COPY ./model/pom.xml .

RUN chmod +x ./mvnw

# Descarga dependencias
RUN ./mvnw clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

# Copiamos source
COPY ./model/src ./src

RUN ./mvnw clean package -DskipTests

FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY --from=builder /app/model-benefits/target/model-0.0.1-SNAPSHOT.jar .

EXPOSE 8001

ENTRYPOINT ["java", "-jar", "model-0.0.1-SNAPSHOT.jar"]

