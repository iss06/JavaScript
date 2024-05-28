//  연습문제 1.
// 2단 ~ 9단까지 구구단표 출력
//  - for문 버전
console.log("\n========= 구구단 for 버전");
for (let i = 2; i < 10; i ++) {
    console.log(i + "단");
    for (let j = 1; j < 10; j ++) {
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log();
}


//  - while문 버전
console.log("\n========= 구구단 while 버전");
let i = 2;
while (i < 10) 
{
    let j = 1;
    console.log(i + "단");
        while ( j < 10) {
            console.log(i + " * " + j + " = " + i * j);
             j ++;
    }
    console.log();
    i ++;
}



//  연습문제 2.
/*

*****
****
***
**
*

*/
//  - for문 버전
console.log("\n========= 역삼각형 for 버전");
for (let i = 5; i > 0; i --) { 
    let star = "";
    for (let j = 0; j < i; j ++) {
        star += "*"
    }
    console.log(star);
}


//  - while문 버전
console.log("\n========= 역삼각형 while 버전");
let x = 5;
while (x > 0) {
    let star = "";
    let y = 0;

    while (y < x) {
        star += "*";
        y ++;
    }
    console.log(star);
    x --;

}    

//  for ... in : 객체의 속성 키를 반복
const obj = {
    name: "홍길동",
    age: 28,
    job: "도적"
}

for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}

// for ... of : 배열을 순회
const arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}