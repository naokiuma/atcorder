function Main(input) {
	input = input.replace(/\r/g, "").trim().split("\n");
	const [N, K] = input[0].split(" ").map(Number);
	const A = input[1].split(" ").map(Number);
  
	const check = (x) => {
	  let sum = 0;
	  for (let i = 0; i < N; i++) sum += Math.floor(x / A[i]);
	  return sum >= K;
	};
  
	let L = 0,
	  R = Math.max(...A) * K; // 最大時間を考慮
  
	while (L < R) {
	  const M = Math.floor((L + R) / 2);
	  if (check(M)) R = M;
	  else L = M + 1;
	}
  
	console.log(L);
  }
  
  // prod
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  
  // dev
  // Main(require("fs").readFileSync("main.txt", "utf8"));
  