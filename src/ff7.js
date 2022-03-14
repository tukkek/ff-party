import * as game from './game.js'

const PARTY=['Cloud','Barret','Tifa','Aerith','Red XIII','Yuffie','Cait Sith','Vincent','Cid']
const FF7=game.generate(document.querySelector('#ff7'),PARTY)

const MATERIA={
  'Cloud':['command','magic'],
  'Barret':['independent','magic'],
  'Tifa':['independent','summon'],
  'Aerith':['magic','summon'],
  'Red XIII':['summon','support'],
  'Yuffie':['command','summon'],
  'Cait Sith':['command','support'],
  'Vincent':['magic','support'],
  'Cid':['independent','command']
}

export function setup(){
  for(let name of PARTY){
    let party=Array.from(FF7.querySelector('.party').childNodes)
    let p=party.find(member=>member.textContent==name)
    for(let m of MATERIA[name]){
      let e=document.createElement('img')
      e.src=`image/${m}.png`
      e.title=m
      p.appendChild(e)
    }
  }
}
