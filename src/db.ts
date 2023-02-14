import { PrismaClient } from '@prisma/client'
import { DMMFClass } from '@prisma/client/runtime'

export const prisma = new PrismaClient()
export const dmmf = (prisma as any)._baseDmmf as DMMFClass
