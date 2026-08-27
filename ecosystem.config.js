module.exports = {
  apps : [
      {
         name: "cloud-sql-auth-proxy",
         script: "./cloud-sql-proxy pro-edu-476313:asia-south1:eca-postgres pro-edu-476313:asia-south1:eca-sql",
         log_file: "./logs/cloud-sql-proxy.log",
      },
      {
        name   : "OrderService",
        script: "java",
        args: "-jar ./OrderService/target/OrderService-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/OrderService.log",
        instances: 2
      },
      {
         name   : "AuthService",
         script: "java",
         args: "-jar ./AuthService/target/AuthService-0.0.1-SNAPSHOT.jar",
         log_file: "./logs/AuthService.log",
         instances: 2
      },
      {
          name   : "UserService",
          script: "java",
          args: "-jar ./UserService/target/UserService-0.0.1-SNAPSHOT.jar",
          log_file: "./logs/UserService.log",
          instances: 2
      },
      {
           name   : "InventoryService",
           script: "java",
           args: "-jar ./InventoryService/target/InventoryService-0.0.1-SNAPSHOT.jar",
           log_file: "./logs/InventoryService.log",
           instances: 2
      },
      {
           name   : "ProductService",
           script: "java",
           args: "-jar ./ProductService/target/ProductService-0.0.1-SNAPSHOT.jar",
           log_file: "./logs/ProductService.log",
           instances: 2
      }
  ]
}
