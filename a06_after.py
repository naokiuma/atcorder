N, Q = map(int, input().split())
A = list(map(int, input().split()))
# 効率的に初期化する
L = [ None ] * Q
R = [ None ] * Q

for j in range(Q):
	L[j], R[j] = map(int, input().split())

# こうやってあらかじめ作れば、処理が早い。
S = [ None ] * (N + 1)
S[0] = 0
for i in range(N):
	S[i + 1] = S[i] + A[i]
 
for j in range(Q):
	print(S[R[j]] - S[L[j] - 1])


#リストの初期化はこれ一択！
https://t49m1.hatenablog.com/entry/200414-python
