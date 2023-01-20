type PageMenu = '' | 'business' | 'tws' | 'tc' | 'tesla' | 'apple';

export const makeMenuObject = (page:PageMenu):Object =>{
let objectToReturn = {
    business:false,
    tws:false,
    tc:false,
    tesla:false,
    apple:false
}
page!==''?objectToReturn[page]=true:false;
return objectToReturn;
}