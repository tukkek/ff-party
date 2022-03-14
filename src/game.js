import * as rpg from './rpg.js'

const GAME=document.querySelector('#game').content.children[0]

function create(character,parent){
  let d=document.createElement('div')
  d.innerHTML=character
  d.name=character
  parent.appendChild(d)
  return d
}

function reveal(div,game){
  let character=div.textContent
  let p=game.querySelector('.party').childNodes
  let c=Array.from(p).find(p=>p.name==character)
  c.classList.toggle('hidden')
}

export function generate(parent,party){
  let g=GAME.cloneNode(true)
  let cs=g.querySelector('.characters')
  for(let p of party){
    let l=document.createElement('label')
    p=create(p,l)
    let c=document.createElement('input')
    c.type='checkbox'
    c.onclick=()=>reveal(p,parent)
    p.insertBefore(c,p.childNodes[0])
    cs.appendChild(l)
  }
  let priority=g.querySelector('.party')
  for(let p of rpg.shuffle(party,true)){
    p=create(p,priority)
    p.classList.add('hidden')
  }
  parent.appendChild(g)
  return g
}
