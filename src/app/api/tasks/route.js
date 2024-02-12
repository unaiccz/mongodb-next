import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import Product from "@/models/product";

export async function GET(){
    connectDB();
    const products = await Product.find(); // Aquí está la corrección
    return NextResponse.json(products)
}
export async function POST(req, res){
    connectDB()
    const data = await req.json();
const nproduct = new Product(data);
const product_saved = await nproduct.save();
console.log(product_saved);
return NextResponse.json({message: "creando tarea!"});
}