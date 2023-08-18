

import { PrismaClient } from '@prisma/client'
import User from "@/app/api/dto/User";
const prisma = new PrismaClient()

export default class UserService {
     async addUser(user: User) {
        return await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                birthday: user.birthday,
                occupation: user.occupation,
                whatsapp: user.whatsapp,
                createdAt: new Date(),
                event: user.event

            }
        })
    }

    async getUsers()  {
        return await prisma.user.findMany()
    }

}
