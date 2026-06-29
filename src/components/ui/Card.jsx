export default function Card({

children,

className=""

}){

return(

<div

className={`

rounded-3xl

border

border-slate-800

bg-slate-900/70

backdrop-blur-xl

shadow-xl

p-8

transition-all

duration-300

hover:-translate-y-2

hover:border-blue-500

${className}

`}

>

{children}

</div>

)

}