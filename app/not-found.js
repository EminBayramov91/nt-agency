import "@/app/styles/error.css";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="error">
            <Image
                src="Logo.svg"
                alt="Header Logo"
                width="69"
                height="40"
            />
            <div className="errorContainer">
                <h1>404</h1>
                <p>Страница не найдена</p>
                <Link className="errorLink" href="/">вернуться На главную</Link>
            </div>
        </div>
    )
}