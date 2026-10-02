import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectType, name, company, email, phone, details } = body;

    const errors = [];
    if (!projectType) errors.push('projectType is required');
    if (!name) errors.push('name is required');
    if (!email) errors.push('email is required');
    if (!details) errors.push('details is required');

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields', errors },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
      );
    }

    // In a real application, you would save this data or send an email here

    return NextResponse.json(
      { success: true, message: 'Thank you! We will get back to you within 24 hours.' },
      { status: 200, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
