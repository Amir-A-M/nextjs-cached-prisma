// import { PrismaClient } from '@prisma/client'

// declare global {
//   var prisma: PrismaClient | undefined
// }

// const prisma = global.prisma || new PrismaClient()

// if (process.env.NODE_ENV === 'development') global.prisma = prisma

import { Prisma } from "cached-prisma";

const prisma = new Prisma().client;

export default prisma
