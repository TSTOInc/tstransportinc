import { Clock, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"

export default function ServicePaused() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 text-center">

      <Empty className="max-w-md space-y-6">
        {/* Logo*/}
        <div className="absolute left-8 top-8">
          <img src="/logo.png" alt="Three Stars Transport Inc Logo" className="h-12 w-auto" />
        </div>

        <EmptyHeader className="space-y-6">
          {/* Clock Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/5 dark:bg-primary/5 text-primary">
            <Clock className="size-10 animate-pulse" />
          </div>

          <div className="space-y-3">
            <EmptyTitle className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              We&apos;ll be right back
            </EmptyTitle>
            <EmptyDescription className="text-pretty text-lg leading-relaxed">
              Three Stars Transport Inc website is currently undergoing a brief scheduled update to improve your experience. We expect to be back online shortly.
            </EmptyDescription>
          </div>
        </EmptyHeader>

        <EmptyContent className="flex flex-col items-center gap-4">
          <div className="h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div className="h-full w-1/3 animate-[loading_2s_ease-in-out_infinite] bg-neutral-500 dark:bg-primary" />
          </div>

          <div className="mt-4 flex flex-col gap-3 w-full">
            <Button variant="outline" className="group rounded-full border-neutral-200 py-6 text-base font-medium transition-all hover:bg-neutral-50 dark:border-neutral-800">
              <MessageCircle className="mr-2 size-5 text-neutral-400" />
              Contact our team
              <ArrowRight className="ml-2 size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </Button>
          </div>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Thank you for your patience
          </p>
        </EmptyContent>
      </Empty>

      {/* Subtle Animation Keyframes in a Style Tag or your CSS file */}
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  )
}