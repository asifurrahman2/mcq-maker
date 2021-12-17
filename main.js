let question = document.querySelector("#question")
let answer = document.querySelector("#answer")
let options = document.querySelectorAll(".options")
let btn = document.querySelector("button")
let result = document.querySelector(".result")

let count = 1
let questions = []

btn.addEventListener("click", () => {
  let optionValues = []
  options.forEach((option, index) => {
    optionValues.push(`(${index+1}) ${option.value}`)
  })

  questions.push({
    numb: count,
    question: question.value,
    answer: answer.value,
    options: optionValues
  })

  count++

  result.innerText = JSON.stringify(questions, null, 5)
})
