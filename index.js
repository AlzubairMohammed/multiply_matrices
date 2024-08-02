const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
/**
 * @swagger
 * components:
 *   schemas:
 *     matrices:
 *       type: object
 *       required:
 *         - matrix1
 *         - matrix2
 *       properties:
 *         matrix1:
 *           type: array
 *           description: The auto-generated id of the matrix
 *         matrix2:
 *           type: array
 *           description: The auto-generated id of the matrix
 *       example:
 *         matrix1: [[1,2,3], [4,2,1], [8,9,2]]
 *         matrix2: [[1,2,3],[4,2,1],[8,9,2]]
 */

/**
 * @swagger
 * /multiply_matrices:
 *   post:
 *     summary: matrices
 *     tags: [matrices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/matrices'
 *     responses:
 *       200:
 *         description: Done successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/matrices'
 *       500:
 *         description: Some server error
 */
app.post("/multiply_matrices", (req, res) => {
  return res.json(req.body);
});
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Matrices multiply API",
      version: "1.0.0",
      description:
        "A simple matrix multiplication API built by Alzubair Mohammed.",
    },
    servers: [
      {
        url: "/",
      },
    ],
  },
  apis: ["./*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));
app.listen(7070, () => console.log(`App listen in 7070`));
