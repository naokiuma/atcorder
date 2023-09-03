// inputに入力データ全体が入る
function Main(input) {
	input = input.split('\n');
	let fisrt_lines = input[0].split(' ');
	
	let total_days = parseInt(fisrt_lines[0],10);//日程
	let card_set = parseInt(fisrt_lines[1],10);//1セットの枚数
	let card_price = parseInt(fisrt_lines[2],10);//1セットの金額
	let price_per_one = parseInt(card_price / card_set,10);//1枚あたりの金額

	//各日程の賃金
	let allday_prices = input[1].split(' ');
	allday_prices = allday_prices.sort((a,b)=> b - a)
	
	//１枚あたりのお得権より高い日を取得し、上からsort、割れるだけわる。
	//割れない場合、その日数をパス買うか、普通金額でやるか判定。

	let kentou_days = [];
	for(let i = 0; i < total_days; i++){
		if(price_per_one < allday_prices[i]){
			kentou_days.push(allday_prices[i])
		}
	}

	//最低限必要なパス
	let need_paths = Math.floor(kentou_days.length / card_set);

	let temp_huyousuuji = need_paths * card_set//ここまではパスなので、検討数字から外す
	let temp_prices = allday_prices;
	temp_prices.splice(0,temp_huyousuuji);//外した。

	let check_price = 0;
	for(let j = 0; j < card_set; j++){
	  if(typeof temp_prices[j] != 'undefined'){
		  check_price = check_price + parseInt(temp_prices[j],10);
	  }
	}

	
	
	if(check_price > card_price){
		need_paths = need_paths + 1
	}
	//console.log(need_paths)

	let total = need_paths * card_price; //パス代金
	allday_prices.splice(0,card_set * need_paths);
	for(let k = 0; k < allday_prices.length; k++){
		total = total + parseInt(allday_prices[k],10);
	}

	console.log(total);



}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));