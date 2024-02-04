export default function Input({dado, tipo, placeholder}){
 function bearHide(e){
    let imgBear = document.querySelector('.bear-img')
    if(e.target.type == 'password'){
       imgBear.setAttribute('src', '/src/assets/bear-hide-password.png')
    } else{
        imgBear.setAttribute('src', '/src/assets/bear-say-hi.png')
    }
 }

 function bearSee(){

 }
    return(
        <>
        <input type={tipo} value={dado} placeholder={placeholder} onFocus={bearHide} onBlur={bearSee}/>
        </>
    )
}