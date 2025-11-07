import { serve } from '@hono/node-server'
import app from '../../src/index'

// Netlify Functions handler
export const handler = async (event: any, context: any) => {
  const url = new URL(event.rawUrl || `https://${event.headers.host}${event.path}`)
  
  const request = new Request(url.toString(), {
    method: event.httpMethod,
    headers: new Headers(event.headers),
    body: event.body ? event.body : undefined,
  })

  try {
    const response = await app.fetch(request)
    
    const headers: Record<string, string> = {}
    response.headers.forEach((value, key) => {
      headers[key] = value
    })

    return {
      statusCode: response.status,
      headers,
      body: await response.text(),
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
