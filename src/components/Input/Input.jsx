export default function Input({dado, tipo, placeholder}){
    return(
        <>
        <input type={tipo} value={dado} placeholder={placeholder} />
        </>
    )
}