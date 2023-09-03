// inputに入力データ全体が入る
function Main(input) {
	input = input.split(' ');
	let last_day = parseInt(input[0],10);
	let first_check_day = parseInt(input[1],10);
	let syuuki = parseInt(input[2],10);

	if(first_check_day > last_day){
		console.log(0);
		return
	}


	console.log(Math.floor(((last_day - first_check_day) / syuuki)) + 1)

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));