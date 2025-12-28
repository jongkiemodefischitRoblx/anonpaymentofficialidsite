export default async function handler(req, res) {
    const { id, slug } = req.query;
    if(!id || !slug) return res.status(400).json({status:"ERROR", message:"Missing id or slug"});

    try {
        const response = await fetch(`https://api.pakasir.com/${slug}/qris/status?id=${id}`, {
            headers: { "apikey": "lPOX2W6MqhFETsfkvVwfBTjDNUlsj1xK" }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch(err){
        console.error(err);
        res.status(500).json({status:"ERROR", message:"Server proxy failed"});
    }
}
