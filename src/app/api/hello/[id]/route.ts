import type { NextRequest } from 'next/server'

export const runtime = 'edge'

const API_BASE_URL = process.env.API_BASE_URL || 'https://18.229.118.0';

export async function GET(request: NextRequest): Promise<Response> {
  let { searchParams } = new URL(request.url);
  let param = searchParams.get('id');

  if (!param) {
    return new Response('Missing ID parameter', { status: 400 });
  }

  try {
    let response = await fetch(`${API_BASE_URL}/${param}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    });
    let data = JSON.stringify(await response.json());
  
    return new Response(data + " - " + param);
  } catch (error) {
    console.error(error);
    return new Response('An error occurred', { status: 500 });
  }
}
