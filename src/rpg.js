export function shuffle(array,clone=false){//adapted from https://stackoverflow.com/a/60662877
  if(clone) array=Array.from(array)
  for(let i=array.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1))
    let a=array[i]
    array[i]=array[j]
    array[j]=a
  }
  return array
}
