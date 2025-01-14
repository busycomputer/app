import { NextResponse } from 'next/server'
import { getServerClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await getServerClient()
  const { data: workflows } = await supabase.from('workflows').select('*').order('id')

  return NextResponse.json({ workflows })
}
