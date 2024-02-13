import { NextResponse
 } from "next/server";
 import connectDB from "@/utils/db";
 import Product from "@/models/product";
export async function GET(req, {params}){
try {
    await connectDB();
    const product = await Product.findById(params.id);
    return NextResponse.json(product);
} catch (error) {
    return NextResponse.json({message: `No se pudo encontrar la tarea! ${params.id}`});
}
return NextResponse.json(tf);
    return NextResponse.json({message: `listando tarea! ${params.id}`});
}
export async function PUT(req, {params}){
const data = await req.json();
try{
    const updated_product = await Product.findByIdAndUpdate(params.id, data, {
        new: true})
        return NextResponse.json({message: `actualizando tarea! ${params.id}`});

    } catch (error) {
        return NextResponse.json({message: `No se pudo actualizar la tarea! ${params.id}`});
}
}
export async function DELETE(req, {params}){
try{
    const deleted_product = await Product.findByIdAndDelete(params.id);
if(!deleted_product){
    return NextResponse.json({message: `No se pudo eliminar la tarea! ${params.id}`});
}
return NextResponse.json({message: `eliminando tarea! ${params.id}`});
}
catch (error) {
    return NextResponse.json({message: `No se pudo eliminar la tarea! ${params.id}`});
}
}
export function PATCH(req, {params}){
    return NextResponse.json({message: `actualizando tarea! ${params.id}`});
}