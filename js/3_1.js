// 基本コード
// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');
	const properties_number = Number(input[0].split(' ')[0]);
	const target = Number(input[0].split(' ')[1]);
	const properties = input[1].split(' ').map(Number);

	let left_key = 0;
	let right_key = properties_number - 1;
	let foundIndex = -1; // 見つかった場合のインデックスを格納する

	while(left_key <= right_key){	
		this_center_num =  Math.floor((Number(left_key) + Number(right_key)) / 2);
		// console.log("今回の真ん中のナンバーは")
		// console.log(this_center_num)
		if (properties[this_center_num] == target) {
			foundIndex = this_center_num;
			console.log(foundIndex + 1)
			break;
		}else if(target < properties[this_center_num]){
			right_key = this_center_num - 1;
		}else{
			left_key = this_center_num + 1;
		}
	}
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));


// //実行
Main(`15 47
11 13 17 19 23 29 31 37 41 43 47 53 59 61 67`);
