export const render = (el : string , update: any) => {
    const element  =document.getElementById(el);
    if (element?.nodeName === 'INPUT'){
        return  ( document.getElementById(el)! as HTMLInputElement).value = update;
    }
    document.getElementById(el)!.innerHTML = "" ;
    document.getElementById(el)?.append(update)
}
