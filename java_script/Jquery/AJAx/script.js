$(()=>{
    let list=$('#people')
 $('#fetch').click(()=>{
  $.get('https://reqres.in/api/users',(data)=>{
      for(let person of data.data)
      {
          list.append($(`<li>${person.first_name} ${person.last_name}
          <img src="${`person.avtar`}">
          </li>`))
      }
  })
 })
})