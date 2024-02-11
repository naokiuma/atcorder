days = int(input())
customer_count = int(input())

#print(days) #8
#print(customer_count) #5

days_info = [0] * days


# 各顧客の参加日時を入れる
for _ in range(0,customer_count):
  start,end = map(int,input().split())
  #print('スタートとend')
  #print(start)
  #print(end)
  days_info[start - 1] += 1
  if end < days:
    #print('減らす！')
    #print(_)
    days_info[end] -= 1
  #print('days_info')
  #print(days_info)



# [1, 1, 1, 0, 0, -1, -2, 0]

#答えを出力
result = 0
for _x in range(0,days):
  result = result + days_info[_x]
  print(result)

