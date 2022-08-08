function solution(a, b) {
    const WEEK = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let day = new Date(`${a} ${b}, 2016`)
    day = WEEK[day.getDay()];
    return day;
}