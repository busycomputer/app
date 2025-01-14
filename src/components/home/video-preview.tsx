import React from 'react'
import SupabaseTableImage from '@/assets/images/supabase-table-editor.png'
export default function VideoPreview() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-2xl border p-2 shadow-lg">
      {/* Browser-like dots */}
      <div className="relative flex w-full items-center gap-1.5 px-2 pb-3 pt-1 lg:gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        <div className="h-2 w-2 rounded-full bg-gray-200"></div>
      </div>

      {/* Video container */}
      <div className="aspect-video h-full w-full overflow-hidden rounded-lg border">
        <div className="relative h-full w-full max-w-full">
          <div className="relative h-full w-full">
            <video
              className="reduce-motion:hidden relative z-10 block h-full w-full"
              height="100%"
              width="100%"
              loop
              autoPlay
              playsInline
              poster={SupabaseTableImage.src}
            >
              <source src="/video/supabase-table-editor.webm" type="video/webm" />
            </video>

            <img
              alt="Supabase dashboard table editor"
              loading="lazy"
              width="1920"
              height="1080"
              decoding="async"
              className="reduce-motion:block relative z-0 overflow-hidden"
              src={SupabaseTableImage.src}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
