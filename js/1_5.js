// 基本コード
// inputに入力データ全体が入る
function Main(input) {
	input = input.split(' ');
	console.log(input)
	let patterns = 0;
	for(let i = 1; i <= input[0]; i++){
		for(let j = 1; j <= input[0]; j++){
			const third_card = input[1] - (Number(i) + Number(j));
			if(1 <= third_card && third_card <= input[0]){
				patterns++;
			}
		}
	}
	console.log(patterns)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));


//実行
Main(`3 6`);

//実行方法
// node このファイルでok