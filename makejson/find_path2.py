import heapq
import json
import os

# 다익스트라 알고리즘 구현
def dijkstra(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 우선순위 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    # 출발지에서 도착지까지의 모든 노드 출력
    # 도착지에서부터 역순으로 추적
    path = last
    path_output = []
    path_output.append(last)
    while distance[path][1] != first:
        path_output.append(distance[path][1])
        path = distance[path][1]
    path_output.append(first)
    path_output.reverse()  # 역순으로 출력되므로 reverse 하기
    return path_output


# 다익스트라 알고리즘2 구현
def dijkstra2(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    return distance[last][0]  # 해당 경로의 가중치 합 반환

# 편한길로 다니는 동국대 지도를 graph2로 구현
# 건물과 길목은 노드로 설정 (건물의 노드는 건물명, 길목의 노드는 알파벳으로 설정)
# 길은 간선으로 설정
# 가중치는 (노드 간 경로를 지날 때 칼로리 소모량, 소수점 5번째에서 반올림)
# 단순 경사 계산이라 계단은 추가 계산 필요
graph2 = {
    '경영관' : {'사회과학관': 2.5336, '문화관': 3.2344, 'QQ': 4.3125},
    '과학관' : {'B': 2.6953, 'D': 0.7008},
    '다향관' : {'L': 1.3477, 'O': 2.5336},
    '만해관' : {'F': 1.0781, 'M': 0.8086, '법학관': 2.0484},
    '명진관' : {'D': 1.1859, 'G': 0.9164},
    '문화관' : {'U': 5.6602, '사회과학관': 2.857, '경영관': 3.2344, '학술관': 11.9834, 'OO': 25.5194},
    '법학관' : {'만해관': 2.0484, 'P': 1.0781, 'LL': 1.0781},
    '본관1층' : {'본관3층': 12.3843, 'Q': 1.4016, 'R': 1.4016},
    '본관3층' : {'본관1층': 1.6172, 'J': 1.8867, 'L': 1.9945},
    '사회과학관' : {'문화관': 2.857, '경영관': 2.5336, 'QQ': 2.6953, 'PP': 1.5633},
    '상록원' : {'A': 0.9164, 'KK': 2.7492},
    '신공학관' : {'Q': 1.725},
    '원흥관1층' : {'II': 0.9703, '원흥관4층': 1.6172, '원흥관6층': 44},
    '원흥관4층' : {'R': 0.9164, '원흥관1층': 1.6172, '원흥관6층': 0.8086},
    '원흥관6층' : {'Q': 1.2398, '원흥관4층': 0.8086, '원흥관1층': 44},
    '정보문화관' : {'II': 1.6172, 'FF': 1.6172},
    '중앙도서관' : {'H': 0.6469, 'Q': 2.6953},
    '학림관' : {'EE': 4.043, 'Y': 3.7734, '체육관': 1.725},
    '학생회관' : {'AA': 0.2695, 'BB': 1.3477},
    '학술관' : {'문화관': 2.1562, 'U': 3.8813},
    '혜화관1층' : {'혜화관4층': 10.7331, 'PP': 1.0781},
    '혜화관4층' : {'혜화관1층': 1.4016, 'M': 1.3477},
    '혜화문' : {'OO': 8.4721, 'U': 2.318},
    '대운동장' : {'KK': 1.0781},
    '체육관' : {'V': 11.8429, '학림관': 1.725},
    '후문' : {'EE': 2.5939},
    '만해광장' : {'W': 0.5391, 'GG': 1.0242},
    '팔정도' : {'G': 1.9406, 'J': 2.6953, 'K': 1.9406, 'L': 2.6953, 'N': 1.9406, 'O': 2.8031, 'P': 2.2102, 'F': 3.0187},
    'A' : {'B': 1.132, '상록원': 0.9164},
    'B' : {'과학관': 2.6953, 'C': 0.6469, 'A': 1.132},
    'C' : {'B': 0.6469, 'D': 2.6953, 'H': 1.0781},
    'D' : {'과학관': 0.7008, '명진관': 1.1859, 'C': 2.6953, 'E': 1.9945},
    'E' : {'D': 1.9945, 'F': 3.0727},
    'F' : {'X': 1.3477, '만해관': 1.0781, '팔정도': 3.0187, 'P': 1.8867, 'G': 1.8867, 'E': 3.0727},
    'G' : {'명진관': 0.9164, '팔정도': 1.9406, 'F': 1.8867, 'J': 1.4016},
    'H' : {'C': 1.0781, 'I': 0.3773, '중앙도서관': 0.6469},
    'I' : {'H': 0.3773, 'J': 0.3773, 'Q': 2.6953},
    'J' : {'K': 1.8328, '팔정도': 2.6953, 'G': 1.4016, 'I': 0.3773, '본관3층': 1.8867},
    'K' : {'팔정도': 1.9406, 'J': 1.8328, 'L': 1.9406},
    'L' : {'K': 1.9406, '팔정도': 2.6953, 'N': 1.8328, '다향관': 1.3477, 'T': 1.6172, 'S': 1.9945, '본관3층': 1.9945},
    'M' : {'만해관': 0.8086, 'Z': 2.1562, 'MM': 2.5875, '혜화관4층': 1.3477},
    'N' : {'팔정도': 1.9406, 'O': 1.9406, 'L': 1.8328},
    'O' : {'다향관': 2.5336, 'N': 1.9406, '팔정도': 2.8031, 'P': 1.0781, 'LL': 1.5094},
    'P' : {'법학관': 1.0781, 'O': 1.0781, 'F': 1.8867, '팔정도': 2.2102},
    'Q' : {'신공학관': 1.725, '중앙도서관': 2.6953, '본관1층': 1.4016, '원흥관6층': 1.2398, 'R': 2.6953, 'I': 2.6953},
    'R' : {'Q': 2.6953, '본관1층': 1.4016, 'S': 1.6172, 'JJ': 1.132, '원흥관4층': 0.9164},
    'S' : {'L': 5.5045, 'R': 1.6172, 'JJ': 1.9406},
    'T' : {'L': 1.6172, 'V': 1.725},
    'U' : {'학술관': 3.8813, '문화관': 5.6602, '혜화문': 2.318},
    'V' : {'체육관': 3.2344, 'T': 3.6148, 'W': 1.2398},
    'W' : {'만해광장': 0.5391, 'JJ': 0.9703, 'V': 2.3255},
    'X' : {'F': 3.4196, 'Z': 1.8328, 'KK': 1.0781},
    'Y' : {'AA': 1.6172, '학림관': 3.7734},
    'Z' : {'X': 13.5264, 'M': 2.1562},
    'AA' : {'학생회관': 0.2695, 'FF': 1.6172, 'Y': 1.6172},
    'BB' : {'학생회관': 3.7193, 'CC': 1.0781},
    'CC' : {'BB': 2.0221, 'DD': 2.6953},
    'DD' : {'CC': 8.0408, 'EE': 1.0781},
    'EE' : {'학림관': 34.4615, 'DD': 3.2163, '후문': 0.8086},
    'FF' : {'정보문화관': 1.6172, 'GG': 2.3255, 'AA': 1.6172},
    'GG' : {'만해광장': 9.0382, 'HH': 1.1122, 'FF': 1.2398},
    'HH' : {'GG': 0.593, 'JJ': 3.5387, 'II': 1.6172},
    'II' : {'HH': 1.6172, '원흥관1층': 0.9703, '정보문화관': 0.593},
    'JJ' : {'R': 2.3722, 'S': 1.9406, 'W': 2.2473, 'HH': 1.8867},
    'KK' : {'대운동장': 1.0781, 'X': 2.7357, 'SS': 1.7789, '상록원': 21.0533},
    'LL' : {'법학관': 1.0781, 'O': 4.842, 'MM': 2.5336},
    'MM' : {'M': 4.8531, 'NN': 1.7789, 'LL': 3.6415},
    'NN' : {'MM': 8.5891, 'OO': 2.8031},
    'OO' : {'PP': 2.857, '문화관': 3.8813, '혜화문': 4.043, 'NN': 2.8031},
    'PP' : {'QQ': 1.6172, '사회과학관': 1.5633, 'OO': 2.857, '혜화관1층': 1.0781},
    'QQ' : {'사회과학관': 2.6953, 'PP': 1.6172, 'RR': 1.6172, '경영관': 4.3125},
    'RR' : {'SS': 4.342, 'QQ': 1.6172},
    'SS' : {'KK': 5.7066, 'RR': 1.4555}
}

node_list = ['경영관', '과학관', '다향관', '만해관', '명진관', '문화관', '법학관', '본관1층', '본관3층', '사회과학관', '상록원', '신공학관', '원흥관1층', '원흥관4층', '원흥관6층', '정보문화관', '중앙도서관', '학림관', '학생회관', '학술관', '혜화관1층', '혜화관4층', '혜화문', '대운동장', '체육관', '후문', '만해광장', '팔정도']

# 편한길 그래프 다익스트라 알고리즘 실행
path_all2 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra(graph2, start, end)
    path_all2[start] = path_start

# 편한길 그래프 다익스트라 알고리즘2 실행
path_all4 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = round(dijkstra2(graph2, start, end), 4)   #소수점 5번째 자리에서 반올림
    path_all4[start] = path_start

# 편한길 그래프를 path2.json 파일로 저장
file_path2 = "./frontend/src/lib/path/path2.json"
with open(file_path2, 'w', encoding='utf-8') as outfile:
    json.dump(path_all2, outfile, ensure_ascii=False, indent=4)

# parent_directory = os.path.abspath('..')
# file_path2 = os.path.join(parent_directory, "./frontend/src/lib/path/path2.json")
# with open(file_path2, 'w', encoding='utf-8') as outfile:
#     json.dump(path_all2, outfile, ensure_ascii=False, indent=4)

# 편한길 그래프2를 path2_1.json 파일로 저장
file_path4 = "./frontend/src/lib/path/path2_1.json"
with open(file_path4, 'w', encoding='utf-8') as outfile:
    json.dump(path_all4, outfile, ensure_ascii=False, indent=4)

# parent_directory = os.path.abspath('..')
# file_path4 = os.path.join(parent_directory, "./frontend/src/lib/path/path2_1.json")
# with open(file_path4, 'w', encoding='utf-8') as outfile:
#     json.dump(path_all4, outfile, ensure_ascii=False, indent=4)

'''
출력형태
{
    출발지1: {
        도착지11: [출발지1 ~ 도착지11 노드들],
        도착지12: [출발지1 ~ 도착지12 노드들],
        ...
    },
    출발지2: {
        도착지21: [출발지2 ~ 도착지 21 노드들],
        도착지22: [출발지2 ~ 도착지 22 노드들],
        ...
    },
    ...
}
'''
