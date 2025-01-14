import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createServerClient()
  const { data: workflows } = await supabase.from('workflows').select('*').order('id')

  return NextResponse.json({ workflows })
}
