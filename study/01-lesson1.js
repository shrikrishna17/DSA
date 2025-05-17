const students = [
  {
    name: "shri"
  },
  {
    name: "krishna"
  },
  {
    name: "sppraj"
  },
  {
    name: "vishal"
  },
  {
    name: "akash"
  }
]

function solution (arr,studentName) {
  for (let i=0; i <arr.length; i++) {
    if(arr[i].name === studentName) {
      return arr[i].name;
    }
  }
} 

const solution2 = (arr,studentName) => {
  for (let i=0; i <arr.length; i++) {
    if(arr[i].name === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
} 

console.log(solution(students,'vishal'));
solution2(students,'vishal')