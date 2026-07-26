import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../../importMap'
import type { Metadata } from 'next'
import type { SanitizedConfig } from 'payload'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export async function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  return generatePageMetadata({
    config: import('../../../../../payload.config').then((m) => m.default) as unknown as Promise<SanitizedConfig>,
    params,
    searchParams,
  })
}

export default async function Page({ params, searchParams }: Args) {
  return RootPage({
    config: import('../../../../../payload.config').then((m) => m.default) as unknown as Promise<SanitizedConfig>,
    importMap,
    params,
    searchParams,
  })
}
