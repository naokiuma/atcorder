// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');

	//全員の配列
	let members = input[1].split(' ');

	// まずはsortして強い順に並べ、二番目に強い人をチーム数分合計する
	members.sort((a,b) => b - a)

	let result = 0;
	let now_iterator = 1;

	//2番目に強い人をたす
	for(let i = 0; i < members.length; i++){

		if(now_iterator == 2){
			
			console.log('2回目')
			console.log(members[i])
			result = result + members[i]
		}

		now_iterator++;
		if(now_iterator == 3){
			now_iterator = 1;
		} 
		
	}

	console.log(result)



	// let strongst = parseInt(members[0],10);
	// let second_keyman = 0;
	// for(let i = 0; i < members.length; i++){
	  
	// 	if(parseInt(members[i],10) !== strongst){
	// 	  //console.log(i)
	// 		second_keyman = members[i];
	// 		//console.log(second_keyman)
	// 		console.log(total_teams * parseInt(second_keyman,10))
	// 		break
	// 	}
	// }
	// console.log(total_teams * strongst)

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));



