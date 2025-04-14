"use client"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => signIn("google", { callbackUrl })}
        className="px-4 py-2 border rounded-md"
      >
        Sign in with Google
      </button>
      <button
        onClick={() => signIn("github", { callbackUrl })}
        className="px-4 py-2 border rounded-md mt-2"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}