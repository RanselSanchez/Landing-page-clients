export default function Button({

    children,

    variant="primary",

    size = "md",

    className="",

    ...props

}){

const variants={

primary:`
bg-blue-600

hover:bg-blue-700

text-white
`,

secondary:`
bg-slate-800

hover:bg-slate-700

text-white
`,

outline:`
border

border-slate-600

hover:border-blue-500

text-white
`

}

const sizes = {

  sm: `
    px-4
    py-2
    text-sm
  `,

  md: `
    px-6
    py-3
    text-base
  `,

  lg: `
    px-8
    py-4
    text-lg
  `

}

return(

<button

className={`
  group
  relative
  overflow-hidden

  inline-flex
  items-center
  justify-center

  ${sizes[size]}

  rounded-2xl

  font-semibold

  transition-all
  duration-300

  hover:-translate-y-1
  hover:scale-105

  active:scale-95

  shadow-lg
  hover:shadow-blue-500/20

  ${variants[variant]}
  ${className}
`}

{...props}

>

{children}

</button>

)

}