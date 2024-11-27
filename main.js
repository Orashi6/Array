const arr = ['OLma' , 'Banan' , 'Gilos' , 'Shaftoli'] 

let savol1 = alert(`Boshlanishidagi Array uzunligi: ${arr.length}`)
console.log(arr);



let savol2 = confirm(`Sizning arraingizdagi malumotlarni olib tashlamoqchimisiz`)



if (savol2 == true) {
    arr.pop()
}

console.log(arr);
let savol3 = alert(` Array uzunligi: ${arr.length}`)

let savol4 = confirm(`Arrayga malumot qoshishni xohlaysizmi`)

if (savol4 == true) {
  let yanaQoshish =  prompt(`Malumotni kiriting`)

  arr.push(yanaQoshish)
}
let savol5 = alert(` Array uzunligi: ${arr.length}`)
console.log(arr);
