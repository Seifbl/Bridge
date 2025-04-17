// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl

  // ✅ Si le domaine ne commence pas par www, on redirige
  if (url.hostname === 'bridgeportage.fr') {
    url.hostname = 'www.bridgeportage.fr'
    return NextResponse.redirect(url)
  }

  // ✅ Si le protocole est http, on redirige vers https
  if (request.headers.get('x-forwarded-proto') === 'http') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
