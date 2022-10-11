function solution(new_id) {
  let answer = new_id.toLowerCase();
  
  answer = answer.replace(/[^a-z\d\-_.]/g, "");
  answer = answer.replace(/[.]+/g, ".");
  answer = answer.replace(/^[.]|[.]+$/g, "");
  
  if (answer === "") answer = "a";
  
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    answer = answer.replace(/^[.]|[.]+$/g, "");
  }
  
  if (answer.length <= 2) answer += answer[answer.length-1].repeat(3 - answer.length);

  return answer;
}