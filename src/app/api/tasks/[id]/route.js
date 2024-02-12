import { NextResponse
 } from "next/server";
export function GET(req, {params}){
    console.log(params);
    return NextResponse.json({message: `listando tarea! ${params.id}`});
}
export function PUT(req, {params}){
    return NextResponse.json({message: `actualizando tarea! ${params.id}`});
}
export function DELETE(req, {params}){
    return NextResponse.json({message: `eliminando tarea! ${params.id}`});
}
export function PATCH(req, {params}){
    return NextResponse.json({message: `actualizando tarea! ${params.id}`});
}