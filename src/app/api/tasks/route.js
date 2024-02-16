export async function GET(req, res){
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    connectDB();
    const products = await Product.find();
    return res.status(200).json(products);
}

export async function POST(req, res){
    try {
        connectDB();
        const data = await req.json();
        const nproduct = new Product(data);
        const product_saved = await nproduct.save();
        return res.status(200).json(product_saved);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message });
    }
}