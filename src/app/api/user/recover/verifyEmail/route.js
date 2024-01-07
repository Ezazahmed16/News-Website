import { SendEmail } from "@/utility/EmailUtility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function GET(req, res) {
    try {
        let prisma = new PrismaClient()
        let { searchParams } = new URL(req.url)
        let email = searchParams.get('email')
        // User Count 
        let count = await prisma.users.count({ where: { email: email } })

        if (count === 1) {
            // OTP Creation 
            let code = Math.floor(100000 + Math.random() * 900000)
            let EmailText = `Your OTP Code is: ${code}`
            let EmailSubject = `News-Website Verification Code`
            await SendEmail(email, EmailText, EmailSubject)

            // Update OTP to Database
            let result = await prisma.users.update({
                where: { email: email },
                data: { otp: code.toString() }
            })

            return NextResponse.json({ status: 'Success', data: result })

        } else {
            return NextResponse.json({ status: 'Fail', data: 'User Not Found' })
        }

    } catch (error) {
        return NextResponse.json({ status: 'Fail', data: error })
    }
} 