total_days,questions = map(int,input().split())
each_day_customers = input().split()

#1ぎょうめ
#print(total_days)
#print(questions)
#2ぎょうめ
#print(each_day_customers)

#全来場者数の合計(参考)
total_costomers = 0
# 各日付の合計来場者数
each_days_totas_count = list()

for _x in range(0,total_days):
  total_costomers += int(each_day_customers[_x])
  each_days_totas_count = each_days_totas_count + [total_costomers]
#print(total_costomers)
#print(each_days_totas_count)


for _q in range(0,questions):
  this_start,this_end = map(int,input().split())
  #print('この日の質問は？以下の日から日までの合計来場者数')
  #print(this_start)
  #print(this_end)
  if(this_start == 1):
    print(each_days_totas_count[this_end - 1])
  else:
    print(each_days_totas_count[this_end - 1] - each_days_totas_count[this_start - 2])


##解説
each_day_customers = input().split()
ここ、
each_day_customers = list(map(int,input().split()))
に変え
ここで1こ1こintしなくて良くなった。
total_costomers += int(each_day_customers[_x])

加えて、速度が爆上がりした。
以下がその解説。



# Pythonにおいて、リスト内包表記やmap()関数を使った場合に、個々の要素に対して関数を適用する処理が、forループやイテレーションよりも効率的である理由はいくつかあります。
# ・内部最適化:
# リスト内包表記やmap()関数を使った場合、Pythonのインタプリタが内部的に最適化を行っています。これにより、ループのオーバーヘッドを減らし、処理速度を向上させることができます。

# ・C言語で実装されたビルトイン関数:
# map()関数やリスト内包表記は、Pythonのビルトイン関数であり、C言語で実装されています。そのため、Pythonの標準のループよりも高速に動作する場合があります。

# ・関数のオーバーヘッドの削減:
# リスト内包表記やmap()関数を使うと、Pythonのインタプリタに一度に関数を適用できます。一方、個々の要素に対してforループを使って個別に関数を適用する場合、そのたびに関数の呼び出しが発生し、オーバーヘッドが生じます。

# そのため、個々の要素に対して関数を適用する処理は、リスト内包表記やmap()関数を使った場合に比べて効率が悪くなる可能性があります。
