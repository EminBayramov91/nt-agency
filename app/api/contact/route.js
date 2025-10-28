export async function POST(req) {
    try {
        const body = await req.json();
        const { name, phone, text, check } = body;

        if (!name || !phone || !text || !check) {
            return new Response(JSON.stringify({ success: false, message: "All fields required" }), { status: 400 });
        }

        console.log("📩 Получена форма:", body);

        return new Response(JSON.stringify({ success: true, message: "Форма успешно отправлена" }), { status: 200 });
    } catch (error) {
        console.error("Ошибка при обработке формы:", error);
        return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
    }
}
