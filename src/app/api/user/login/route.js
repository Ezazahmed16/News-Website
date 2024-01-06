import { CreateToken } from "@/utility/JWTTokenHelper"
import { PrismaClient } from "@prisma/client"
import { data } from "autoprefixer"
import { NextResponse } from "next/server"

// Login API (api/user/login)
export async function POST(req, res) {
    try {
        let reqBody = await req.json()
        const prisma = new PrismaClient()
        const result = await prisma.users.findUnique({ where: reqBody })

        if (result.length === 0) {
            return NextResponse.json({ status: 'Fail', data: result })
        } else {
            let token = await CreateToken(result['email', result['id']])
            let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000)
            const cookiesString = `token=${token};expires=${expireDuration.toUTCString()};path= /`

            return NextResponse.json({ status: 'Success', data: token }, { status: 200, headers: { 'set-cookie': cookiesString } })
        }

    } catch (e) {
        return NextResponse.json({ status: 'Fail', data: e })
    }
}
