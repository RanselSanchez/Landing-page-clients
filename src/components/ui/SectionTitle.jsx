export default function SectionTitle({

title,

subtitle

}){

return(

<div className="mb-16">

<p className="text-blue-400 font-semibold">

{subtitle}

</p>

<h2 className="text-5xl font-bold mt-3">

{title}

</h2>

</div>

)

}