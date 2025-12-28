export default async function handler(req, res){
    const { id, slug } = req.query;
    if(!id || !slug) return res.status(400).json({error:"Missing id or slug"});
    
    try{
        // Fetch QRIS image dari Pakasir
        const response = await fetch(`https://api.pakasir.com/${slug}/qris/${id}.png`, {
            headers:{ "apikey": "lPOX2W6MqhFETsfkvVwfBTjDNUlsj1xK" }
        });
        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString('base64');
        res.setHeader("Content-Type","image/png");
        res.send(Buffer.from(base64,'base64'));
    }catch(err){
        console.error(err);
        res.status(500).json({error:"QRIS proxy failed"});
    }
}
