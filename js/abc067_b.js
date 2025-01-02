// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');
	let total = input[0].split(' ')[1];
	let choices = input[1].split(' ');

	choices = choices.sort((a,b) => b - a).map(Number)
	console.log(choices)

	let result = 0
	for(let i = 0; i < total; i++){
		result = result + choices[i];
	}

	console.log(result)


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));