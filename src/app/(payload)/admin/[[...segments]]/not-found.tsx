import { NotFoundPage } from '@payloadcms/next/views'
import { importMap } from '../../importMap'
import type { SanitizedConfig } from 'payload'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default async function NotFound({ params, searchParams }: Args) {
  return NotFoundPage({
    config: import('../../../../../payload.config').then((m) => m.default) as unknown as Promise<SanitizedConfig>,
    importMap,
    params,
    searchParams,
  })
}
