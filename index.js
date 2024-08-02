const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Multiply matrices API",
      version: "1.0.0",
      description:
        "A simple matrix multiplication API built by Alzubair Mohammed.",
    },
    servers: [
      {
        url: URL,
      },
    ],
  },
  //   apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.listen(7070, () => console.log(`App listen in 7070`));
