// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = url.hostname

  // ✅ Rediriger vers www.bridgeportage.fr si le domaine est sans www
  if (hostname === 'bridgeportage.fr') {
    url.hostname = 'www.bridgeportage.fr'
    return NextResponse.redirect(url)
  }

  // ✅ Rediriger vers HTTPS uniquement si on n’est PAS en développement local
  const isLocalhost =
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname.endsWith('.localhost')

  if (!isLocalhost && request.headers.get('x-forwarded-proto') === 'http') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }

  // ✅ Sinon, continuer normalement
  return NextResponse.next()
}
