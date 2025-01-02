// 基本コード
// inputに入力データ全体が入る
function Main(input) {
	// input = input.split(' ');
	input = input.split('\n');
	const total_days = input[0].split(' ')[0];
	const total_questions = input[0].split(' ')[1];
	const customers = input[1].split(' ');

	// console.log(total_days) //15
	// console.log(total_questions) //3
	// console.log(customers)//[8,6,9,1...]
	// console.log("です")

	//総入場数を計算する
	let customer_total_counts =[0];
	customers.forEach(customer => {
		// console.log("---計算--")
		// console.log(customer_total_counts[customers.length - 1])
		
		customer_total_counts.push(Number(customer_total_counts[customer_total_counts.length - 1]) + Number(customer));
	});
	// console.log("各日の合計")
	// console.log(customer_total_counts)//これで各日にちの合計数が出た。

	for(let i = 1; i <= total_questions; i++){
		const this_question_row = i + 1;
		// console.log("実際の問題")
		// console.log(input[this_question_row])
		let first_day = input[this_question_row].split(' ')[0] - 1;
		let last_day = input[this_question_row].split(' ')[1];

		// console.log(first_day)
		// console.log(last_day)
		// console.log("--------------")
		console.log(customer_total_counts[last_day] - customer_total_counts[first_day])
		//この問題に対して処理を行う。
	}


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
