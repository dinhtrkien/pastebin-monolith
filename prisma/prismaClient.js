// Prisma client setup
// src/infrastructure/prismaClient.ts
const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

module.exports = prismaClient;