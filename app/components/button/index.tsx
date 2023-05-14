import { cn } from "@/app/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button 
      className={cn(
        'font-bold bg-gradient-to-b from-[#ffba00] to-[#ff4640] py-3 px-4 rounded-lg text-gray-100 flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50',
        className
      )} 
      { ...props }
    >
      {children}
    </button>
  )
}