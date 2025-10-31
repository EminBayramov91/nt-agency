export default async function sitemap() {

    return [
        {
            url: "https://nt-agency.cloud",
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
    ];
}