import { NotFoundPage } from '@payloadcms/next/views'

type Args = {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export default async function NotFound({ params, searchParams }: Args) {
  const { segments } = await params
  const { searchParams: sp } = { searchParams: await searchParams }
  return NotFoundPage({
    config: import('../../../../../payload.config'),
    params: { segments },
    searchParams: sp,
  })
}
