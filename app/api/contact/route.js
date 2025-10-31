import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const {name, phone, text, check} = body;

        if (!name || !phone || !text || !check) {
            return new Response(JSON.stringify({success: false, message: "All fields required"}), {status: 400});
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"N&T Agency" <${process.env.SMTP_USER}>`,
            to: process.env.TO_EMAIL,
            subject: "📩 Новая заявка с сайта N&T Agency",
            html: `
                <h2>Новая заявка с сайта</h2>
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Комментарий:</strong> ${text}</p>
                <p><strong>Согласие:</strong> ${check ? "✅ Да" : "❌ Нет"}</p>
            `
        });


        console.log("✅ Email sent successfully!");
        return new Response(JSON.stringify({success: true, message: "Форма успешно отправлена"}), {status: 200});
    } catch (error) {
        console.error("Ошибка при обработке формы:", error);
        return new Response(JSON.stringify({success: false, message: "Server error"}), {status: 500});
    }
}
