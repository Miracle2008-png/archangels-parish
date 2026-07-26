import { getPayload } from 'payload'
import config from '../../payload.config'

/**
 * Returns a singleton Payload instance for server-side data fetching.
 * Use this in Server Components and API routes.
 */
export async function getPayloadClient() {
  return getPayload({ config })
}
